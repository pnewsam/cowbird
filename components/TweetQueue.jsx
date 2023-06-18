import React from "react";
import { useTauri } from "tauri-react";

function TweetQueue() {
  const { state, invoke } = useTauri();
  const { tweets } = state;

  const handleReorder = async (newOrder) => {
    const response = await invoke("reorderTweets", { newOrder });
    if (response.success) {
      console.log("Tweet queue reordered!");
    } else {
      console.error("Tweet queue reordering failed!");
    }
  };

  const handleRemove = async (tweet) => {
    const response = await invoke("removeTweet", { tweet });
    if (response.success) {
      console.log("Tweet removed!");
    } else {
      console.error("Tweet removal failed!");
    }
  };

  return (
    <ul>
      {tweets.map((tweet) => (
        <li key={tweet.id}>
          {tweet.text}
          <button onClick={() => handleRemove(tweet)}>Remove</button>
        </li>
      ))}
      <button onClick={() => handleReorder(tweets.reverse())}>
        Reverse Order
      </button>
    </ul>
  );
}

export default TweetQueue;
