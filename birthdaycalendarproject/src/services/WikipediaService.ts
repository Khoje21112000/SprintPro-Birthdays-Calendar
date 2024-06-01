// src/services/WikipediaService.ts

export const fetchHistoricalEvents = async (month: number, day: number) => {
    try {
      let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;
  
      // Add your Authorization and Api-User-Agent headers here
      let response = await fetch(url, {
        headers: {
          'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
          'Api-User-Agent': 'YOUR_APP_NAME (YOUR_EMAIL_OR_CONTACT_PAGE)'
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      return response.json();
    } catch (error) {
      console.error('Error fetching historical events:', error);
      throw error;
    }
  };
  