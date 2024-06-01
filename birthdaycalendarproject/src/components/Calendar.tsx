import React, { useState, useEffect } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import BirthdayList from '../components/BirthdayList';
import { getBirthdaysForDay } from '../services/BirthdayService';
import { fetchHistoricalEvents } from '../services/WikipediaService';

// Define a local InputProps interface if necessary
interface InputProps {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
}

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [birthdays, setBirthdays] = useState<string[]>([]);
  const [historicalEvents, setHistoricalEvents] = useState<any[]>([]);

  useEffect(() => {
    if (selectedDate !== null) {
      const month = selectedDate.getMonth() + 1;
      const day = selectedDate.getDate();

      fetchHistoricalEvents(month, day)
        .then(data => {
          setHistoricalEvents(data.events);
        })
        .catch(error => {
          console.error('Error fetching historical events:', error);
        });

      const formattedDate = `${month}/${day}`;
      getBirthdaysForDay(formattedDate)
        .then(birthdays => {
          setBirthdays(birthdays);
        })
        .catch(error => {
          console.error('Error fetching birthdays:', error);
        });
    }
  }, [selectedDate]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker
        label="Select a date"
        value={selectedDate !== null ? selectedDate : undefined} // Use undefined when selectedDate is null
        onChange={handleDateChange}
        renderInput={(params: InputProps) => <input {...params} />}
      />

      <div>
        <h2>Historical Events</h2>
        <ul>
          {historicalEvents.map((event, index) => (
            <li key={index}>{event.text}</li>
          ))}
        </ul>
      </div>
      <BirthdayList birthdays={birthdays} />
    </div>
  );
};

export default Calendar;
