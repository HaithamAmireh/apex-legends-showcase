let legends = [];
let currentIndex = 0;

async function loadLegends() {
  try {
    const res = await fetch("http://localhost:3000/api/legends");
    legends = await res.json();

    const carousel = document.getElementById("carousel");
    const infoPanel = document.getElementById("info-panel");

    carousel.innerHTML = "";

    legends.forEach((legend, idx) => {
      const img = document.createElement("img");
      img.src = legend.image;
      img.alt = legend.alias;
      img.dataset.index = idx;

      // Add click handler
      img.addEventListener("click", () => {
        currentIndex = idx;
        updateActiveState();
        showLegend(legend);
      });

      carousel.appendChild(img);
    });

    // Show first legend by default
    if (legends.length > 0) {
      currentIndex = 0;
      updateActiveState();
      showLegend(legends[0]);
    }

    // Setup navigation buttons
    setupNavigation();
  } catch (error) {
    console.error("Error loading legends:", error);
    document.getElementById("info-panel").innerHTML = `
      <p style="color: #ff4655;">Error loading legends. Make sure the server is running on port 3000.</p>
    `;
  }
}

function showLegend(legend) {
  const infoPanel = document.getElementById("info-panel");

  infoPanel.innerHTML = `
    <h2>${legend.alias} <small>(${legend.real_name})</small></h2>
    <p><em>"${legend.quote}"</em></p>
    <p><strong>Class:</strong> ${legend.class}</p>
    <p><strong>Home World:</strong> ${legend.home_world}</p>
    <p><strong>Age:</strong> ${legend.age}</p>

    <div class="ability">
      <strong>Class Passive:</strong> ${legend.class_passive}
    </div>

    <div class="ability">
      <strong>Tactical:</strong> ${legend.tactical}
      <br><small>${legend.tactical_wiki}</small>
    </div>

    <div class="ability">
      <strong>Passive:</strong> ${legend.passive}
      <br><small>${legend.passive_wiki}</small>
    </div>

    <div class="ability">
      <strong>Ultimate:</strong> ${legend.ultimate}
      <br><small>${legend.ultimate_wiki}</small>
    </div>

    <p style="margin-top: 20px; font-size: 0.9rem; color: #ccc;">${legend.wiki}</p>
  `;
}

function updateActiveState() {
  const carousel = document.getElementById("carousel");
  const images = carousel.querySelectorAll("img");

  // Remove active class from all images
  images.forEach((img) => img.classList.remove("active"));

  // Add active class to current image
  if (images[currentIndex]) {
    images[currentIndex].classList.add("active");
    scrollToActiveImage();
  }
}

function scrollToActiveImage() {
  const carousel = document.getElementById("carousel");
  const activeImage = carousel.querySelector("img.active");
  const container = document.querySelector(".carousel-container");

  if (activeImage && container) {
    const containerRect = container.getBoundingClientRect();
    const imageRect = activeImage.getBoundingClientRect();
    const scrollLeft = container.scrollLeft;

    // Calculate optimal scroll position to center the active image
    const imageCenter =
      imageRect.left - containerRect.left + scrollLeft + imageRect.width / 2;
    const containerCenter = containerRect.width / 2;
    const targetScroll = imageCenter - containerCenter;

    container.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: "smooth",
    });
  }
}

function setupNavigation() {
  // Add keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" && legends.length > 0) {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : legends.length - 1;
      updateActiveState();
      showLegend(legends[currentIndex]);
    } else if (e.key === "ArrowRight" && legends.length > 0) {
      currentIndex = currentIndex < legends.length - 1 ? currentIndex + 1 : 0;
      updateActiveState();
      showLegend(legends[currentIndex]);
    }
  });
}

// Add smooth scrolling behavior to carousel container
function setupCarouselScrolling() {
  const container = document.querySelector(".carousel-container");
  if (container) {
    // Add mouse wheel horizontal scrolling
    container.addEventListener("wheel", (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    });
  }
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  loadLegends();
  setupCarouselScrolling();
});

// Also support the old way of loading when script is loaded with defer
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    loadLegends();
    setupCarouselScrolling();
  });
} else {
  loadLegends();
  setupCarouselScrolling();
}
