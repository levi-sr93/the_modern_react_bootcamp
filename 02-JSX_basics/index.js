function getMood() {
    const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
    return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>My image!</h1>
                <img src="../00-files/wallpaper.jpg" />
                {/* Embedding JS in JSX */}
                <h2>My number is: {2 * 8.4}</h2>
                <h2>My Current mood is : {getMood()}</h2>

            </div>
        )
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));