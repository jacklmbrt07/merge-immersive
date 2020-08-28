import React from "react";
import "../Tags/TagsInput.css"

const TagsInput = (props) => {
    const [hobbies, setTags] = React.useState(props.user.hobbies);
    const removeHobbies = indexToRemove => {
        setTags([...hobbies.filter((_, index) => index !== indexToRemove)]);
    };
    const addHobbies = event => {
        if (event.target.value !== "") {
            setTags([...hobbies, event.target.value]);
            props.selectedTags([...hobbies, event.target.value]);
            event.target.value = "";
        }
    };
    return (
        <div className="tags-input">
            <ul id="tags">
                {hobbies.map((hobby, index) => (
                    <li key={index} className="tag">
                        <span className='tag-title'>{hobby}</span>

                        <span role='img' aria-label='delete' className='tag-close-icon'
                            onClick={() => removeHobbies(index)}
                        >
                            ⛔️
						</span>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                handleEntry={event => event.key === "Enter" ? addHobbies(event) : null}
                placeholder="Press enter to add a hobby"
            />
            <hr />
        </div>
    );
};

export default TagsInput
