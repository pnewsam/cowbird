import React, { useState } from 'react';
import { useTauri } from 'tauri-react';

function Tweet() {
  const [text, setText] = useState('');
  const { invoke } = useTauri();

  const handleCreate = async (e) => {
    e.preventDefault();
    const response = await invoke('createTweet', { text });
    if (response.success) {
      console.log('Tweet created!');
    } else {
      console.error('Tweet creation failed!');
    }
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    const response = await invoke('publishTweet');
    if (response.success) {
      console.log('Tweet published!');
    } else {
      console.error('Tweet publishing failed!');
    }
  };

  return (
    <form onSubmit={handleCreate}>
      <label>
        Text:
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <button type="submit">Create Tweet</button>
      <button onClick={handlePublish}>Publish Tweets</button>
    </form>
  );
}

export default Tweet;
