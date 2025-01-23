import React, {useState} from 'react';

const NewGoal = (props) => {

    const [enteredText, setEnteredText] = useState('');
    const addGaolHandler = (event) =>{
        event.preventDefault();


        const newGaol = {
            id: Math.random().toString(),
            text: enteredText
        }
        setEnteredText('');
        props.onAddGoal(newGaol);
    }

    const textChangeHandler = (event) => {
       setEnteredText(event.target.value);
    }

    return (
        <form className="new-goal" onSubmit={addGaolHandler}>
            <input type="text" value = {enteredText} onChange={textChangeHandler}/>
            <button type="submit">Add Goal</button>
        </form>
    );
}

export default NewGoal;