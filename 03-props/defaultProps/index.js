class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    to="Ringo"
                    from="Paul"
                    num={3}
                    // data={[1, 2, 3, 4]} algumas formas de dados que podem ser passadas como props
                    isFunny={false}
                    bangs={4}
                    // img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                />
                <Hello
                    to="George"
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));