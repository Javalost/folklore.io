import React from 'react';

function FullStory({ story }) {
  return (
    <div>
      <h1>{story.country}</h1>
      <p>{story.story}</p>
    </div>
  );
}

export default FullStory;
