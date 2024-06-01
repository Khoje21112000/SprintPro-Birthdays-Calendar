import React from 'react';
import BirthdayListItem from '../components/BirthdayListItem';

interface Props {
  birthdays: string[];
}

const BirthdayList: React.FC<Props> = ({ birthdays }) => {
  return (
    <div>
      <h2>Birthdays on selected day:</h2>
      <ul>
        {birthdays.map((birthday, index) => (
          <BirthdayListItem key={index} birthday={birthday} />
        ))}
      </ul>
    </div>
  );
};

export default BirthdayList;
