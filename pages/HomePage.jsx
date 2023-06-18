import React from 'react';
import Tweet from '../components/Tweet';
import TweetQueue from '../components/TweetQueue';

function HomePage() {
  return (
    <div>
      <h1>Create a new tweet:</h1>
      <Tweet />
      <h1>Your tweet queue:</h1>
      <TweetQueue />
    </div>
  );
}

export default HomePage;
