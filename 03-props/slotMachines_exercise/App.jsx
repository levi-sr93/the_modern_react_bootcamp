class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Slot machines!</h1>
                <Machine
                    s1="apple"
                    s2="lemon "
                    s3="grapes"
                />
                <Machine
                    s1="apple"
                    s2="apple"
                    s3="apple"
                />
                <Machine
                    s1="orange"
                    s2="apple"
                    s3="grapes"
                />

            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));