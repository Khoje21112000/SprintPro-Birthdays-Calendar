import React from 'react';
import Calendar from './components/Calendar';
import './styles.css';
import FavouriteBirthdays from './components/FavouriteBirthdays';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Birthdays Calendar App</h1>
      <div className="calendar-container">
        <Calendar />
      </div>
      <div className="favourites-container">
        <FavouriteBirthdays />
      </div>
    </div>
  );
};

export default App;
