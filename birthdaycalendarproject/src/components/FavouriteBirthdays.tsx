import React, { useState, useEffect } from 'react';

const FavouriteBirthdays: React.FC = () => {
  const [favouriteBirthdays, setFavouriteBirthdays] = useState<string[]>([]);

  useEffect(() => {
    // Fetch favourite birthdays logic (simulated with local storage)
    const storedFavourites = localStorage.getItem('favouriteBirthdays');
    if (storedFavourites) {
      setFavouriteBirthdays(JSON.parse(storedFavourites));
    }
  }, []);

  const handleRemoveFromFavourites = (birthday: string) => {
    // Remove birthday from favourites logic
    const updatedFavourites = favouriteBirthdays.filter(b => b !== birthday);
    setFavouriteBirthdays(updatedFavourites);
    localStorage.setItem('favouriteBirthdays', JSON.stringify(updatedFavourites));
  };

  return (
    <div>
      <h2>Favourite Birthdays</h2>
      <ul>
        {favouriteBirthdays.length > 0 ? (
          favouriteBirthdays.map((birthday, index) => (
            <li key={index}>
              {birthday}{' '}
              <button onClick={() => handleRemoveFromFavourites(birthday)}>
                Remove from Favourites
              </button>
            </li>
          ))
        ) : (
          <li>No favourite birthdays yet.</li>
        )}
      </ul>
    </div>
  );
};

export default FavouriteBirthdays;
