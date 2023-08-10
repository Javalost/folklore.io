import React, { useEffect, useState } from 'react';

function DataTest() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/datatest')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch stories from server.');
        }
        return response.json();
      })
      .then(data => {
        setStories(data);
      })
      .catch(error => {
        console.error('Fetching error: ', error);
      });
  }, []);

  return (
    <div>
       <ul>
        {stories.map(story => (
          <div key={story.id}>
            <h2>{story.storyname}</h2>
            <p>{story.content}</p>
            <p><strong>Location:</strong> {story.location}</p>
         </div>
        ))}
      </ul>
    </div>
  );
}

export default DataTest;
