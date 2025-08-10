# Apex Legends Showcase

An interactive web application that showcases Apex Legends characters with detailed information about their abilities, lore, and statistics. Features a responsive carousel interface with smooth navigation and detailed character profiles.

## Features

- **Interactive Character Carousel**: Browse through all Apex Legends characters with smooth scrolling
- **Detailed Character Information**: View comprehensive details including abilities, lore, and stats
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Keyboard Navigation**: Navigate using arrow keys for accessibility
- **Smooth Animations**: Enhanced user experience with CSS transitions and animations
- **RESTful API**: Backend API serving character data from PostgreSQL database

## Screenshots

### Desktop View
The main interface features a horizontal carousel of character portraits alongside detailed information panels.

### Mobile View
Responsive design adapts to smaller screens while maintaining functionality and visual appeal.

## Technologies Used

### Frontend
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with flexbox, gradients, and animations
- **Vanilla JavaScript**: ES6+ features for dynamic functionality
- **Responsive Design**: Mobile-first approach

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **PostgreSQL**: Database for character data
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v12 or higher)
- npm (comes with Node.js)

## Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd apex-legends-showcase
```

### 2. Backend Setup
```bash
cd backend
npm install
```

### 3. Database Setup

1. Create a PostgreSQL database:
```sql
CREATE DATABASE apex_legends_db;
```

2. Create the champions table:
```sql
CREATE TABLE champions (
  id SERIAL PRIMARY KEY,
  alias VARCHAR(100) NOT NULL,
  real_name VARCHAR(100),
  quote TEXT,
  class VARCHAR(50),
  home_world VARCHAR(100),
  age VARCHAR(20),
  class_passive TEXT,
  tactical VARCHAR(100),
  tactical_wiki TEXT,
  passive VARCHAR(100),
  passive_wiki TEXT,
  ultimate VARCHAR(100),
  ultimate_wiki TEXT,
  wiki TEXT,
  image VARCHAR(255)
);
```

3. Insert sample data (optional):
```sql
INSERT INTO champions (alias, real_name, quote, class, home_world, age, class_passive, tactical, tactical_wiki, passive, passive_wiki, ultimate, ultimate_wiki, wiki, image) VALUES
('Wraith', 'Renee Blasey', 'I am speed.', 'Assault', 'Typhon', '32', 'Faster health regen when not taking damage.', 'Into the Void', 'Quickly reposition through the void space, avoiding all damage.', 'Voices from the Void', 'A voice warns you when enemies are aiming at you.', 'Dimensional Rift', 'Create two portals to quickly travel through dimensions.', 'Wraith is a mysterious legend who fights to uncover the truth behind her identity.', 'https://example.com/wraith.jpg');
```

### 4. Environment Configuration

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Edit the `.env` file with your database credentials:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=apex_legends_db
PORT=3000
```

## Running the Application

### 1. Start the Backend Server
```bash
cd backend
npm start
```

The server will start on `http://localhost:3000`

### 2. Open the Frontend
Navigate to the project root and open `index.html` in your web browser, or use a local development server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed globally)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Project Structure

```
apex-legends-showcase/
├── backend/
│   ├── node_modules/
│   ├── .env.example
│   ├── db.js              # Database connection
│   ├── index.js           # Express server setup
│   ├── package.json       # Backend dependencies
│   ├── package-lock.json
│   └── routes.js          # API routes
├── index.html             # Main HTML file
├── script.js              # Frontend JavaScript
├── styles.css             # CSS styling
└── README.md              # This file
```

## API Endpoints

### GET /api/legends
Returns all Apex Legends characters with their complete information.

**Response Example:**
```json
[
  {
    "id": 1,
    "alias": "Wraith",
    "real_name": "Renee Blasey",
    "quote": "I am speed.",
    "class": "Assault",
    "home_world": "Typhon",
    "age": "32",
    "class_passive": "Faster health regen when not taking damage.",
    "tactical": "Into the Void",
    "tactical_wiki": "Quickly reposition through the void space, avoiding all damage.",
    "passive": "Voices from the Void",
    "passive_wiki": "A voice warns you when enemies are aiming at you.",
    "ultimate": "Dimensional Rift",
    "ultimate_wiki": "Create two portals to quickly travel through dimensions.",
    "wiki": "Wraith is a mysterious legend who fights to uncover the truth behind her identity.",
    "image": "https://example.com/wraith.jpg"
  }
]
```

## Features in Detail

### Carousel Navigation
- **Mouse Navigation**: Click on any character portrait to view their details
- **Keyboard Navigation**: Use arrow keys (← →) to navigate between characters
- **Touch/Scroll**: Horizontal scrolling support for touch devices
- **Visual Feedback**: Active character highlighting and smooth transitions

### Character Information Panel
- **Comprehensive Details**: Name, real name, quote, class, home world, and age
- **Ability Breakdown**: Detailed descriptions of passive, tactical, and ultimate abilities
- **Lore Information**: Background story and character wiki information
- **Responsive Layout**: Adapts to different screen sizes

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Medium screen adaptations
- **Desktop Enhanced**: Full feature set on larger screens
- **Accessibility**: ARIA labels and keyboard navigation support

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Development

### Adding New Characters
1. Insert character data into the PostgreSQL database
2. Ensure the image URL is accessible
3. The frontend will automatically display the new character

### Customizing Styles
Edit `styles.css` to modify:
- Color scheme (CSS custom properties recommended)
- Layout dimensions
- Animation timings
- Responsive breakpoints

### Extending API
Add new endpoints in `backend/routes.js` following the existing pattern.

## Troubleshooting

### Common Issues

1. **Images not loading**: Check that image URLs in the database are accessible
2. **Database connection failed**: Verify your `.env` file settings and database status
3. **CORS errors**: Ensure the backend server is running on port 3000
4. **Character data not showing**: Check browser console for API errors

### Debug Mode
Add `console.log` statements in `script.js` to debug data loading and navigation issues.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Apex Legends character data and images are property of Respawn Entertainment
- Built for educational purposes
- Thanks to the Apex Legends community for inspiration

## Future Enhancements

- [ ] Search functionality
- [ ] Filter by character class
- [ ] Favorite characters feature
- [ ] Character comparison tool
- [ ] Dark/light theme toggle
- [ ] Animation improvements
- [ ] PWA capabilities# apex-legends-showcase
