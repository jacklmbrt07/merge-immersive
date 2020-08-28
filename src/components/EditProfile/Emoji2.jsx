import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

const Emoji2 = () => {
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    }

    return (
        <div>
            {chosenEmoji ? (
                <span> {chosenEmoji.emoji}</span>
            ) : (
                    <span> No Emoji Chosen</span>
                )}
            <Picker onEmojiClick={onEmojiClick}
            />
            {/* {chosenEmoji && <EmojiData chosenEmoji={chosenEmoji} />} */}
        </div>
    );
};

// const EmojiData = ({ chosenEmoji }) => (
//     <div style={{ textAlign: 'center', marginRight: '810px' }}>
//         <br></br>
//         <br></br>
//         <hr></hr>
//         <strong>Names:</strong> {chosenEmoji.names.join(', ')}<br />
//         <strong>Symbol:</strong> {chosenEmoji.emoji}<br />
//     </div>
// );

export default Emoji2;