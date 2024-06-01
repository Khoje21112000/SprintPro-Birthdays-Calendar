export const getBirthdaysForDay = async (date: string): Promise<string[]> => {
    const response = await fetch(
      `https://api.wikimedia.org/wiki/API_reference/Feed/On_this_day/${date}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch birthdays.');
    }
    const data = await response.json();
    const birthdays = data.events.map((event: any) => event.text);
    return birthdays;
  };
  