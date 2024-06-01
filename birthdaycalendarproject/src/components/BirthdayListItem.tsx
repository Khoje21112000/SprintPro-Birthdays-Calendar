import React from 'react';

interface Props {
  birthday: string;
}

const BirthdayListItem: React.FC<Props> = ({ birthday }) => {
  const handleSaveToFavourites = () => {
    // Retrieve existing favourites from local storage or initialize an empty array
    const existingFavourites = JSON.parse(localStorage.getItem('favouriteBirthdays') || '[]');
    
    // Check if the birthday is already in favourites
    if (!existingFavourites.includes(birthday)) {
      // Add the birthday to favourites
      const updatedFavourites = [...existingFavourites, birthday];
      localStorage.setItem('favouriteBirthdays', JSON.stringify(updatedFavourites));
      alert(`Birthday ${birthday} saved to favourites!`);
    } else {
      // Birthday already in favourites, notify user
      alert(`Birthday ${birthday} is already in favourites!`);
    }
  };

  return (
    <li>
      {birthday}{' '}
      <button onClick={handleSaveToFavourites}>Save to Favourites</button>
    </li>
  );
};

export {}; // Add an empty export statement to ensure it is treated as a module

export default BirthdayListItem; // Export the component as default
