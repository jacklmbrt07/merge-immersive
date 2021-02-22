import React, { useState } from "react";
import Picker from "emoji-picker-react";

const Emoji2 = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div>
      {chosenEmoji ? (
        <span> {chosenEmoji.emoji}</span>
      ) : (
        <span> No Emoji Chosen</span>
      )}
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  );
};

export default Emoji2;
