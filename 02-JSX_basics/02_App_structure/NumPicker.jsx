function getNum(){
    return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
    render(){
        const num = getNum()
        let msg;
        if(num === 7) {
            msg =
            <div>
                <h2>CONGRATSS!!!!</h2>
                <img src="https://media.giphy.com/media/Ma0mkiZtkdcLcJjsp0/giphy.gif" />
            </div>;
        } else {
            msg = 'Bad';
        }
        return (
            <div>
            <h1>Your number is...{num}</h1>
            <p>{num ===  7 ? 'Congrats' : 'Unlucky'}</p>
            {num === 7 ? <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" /> : null}
            {msg}
            </div>
        )
    }
}