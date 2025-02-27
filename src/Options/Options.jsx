const Options = ({ feedback, setFeedback }) => {
    const handleClick = (type) => { setFeedback({ ...feedback, [type]: feedback[type] + 1 }) };

    return (
        <div>
            <button onClick={() => handleClick('good')}>Good</button>
            <button onClick={() => handleClick('neutral')}>Neutral</button>
            <button onClick={() => handleClick('bad')}>Bad</button>
        </div>
    );

};


export default Options;