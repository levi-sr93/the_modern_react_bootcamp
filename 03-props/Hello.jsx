class Hello extends React.Component {
    render() {
        // this.props.from = "Blue"; This will not work
        // console.log(this.props)
        // let bangs = this.props.bangs; This will return a number
        let bangs = "!".repeat(this.props.bangs)
        return (
            <div>
                <p> Hi {this.props.to} from {this.props.from}{bangs}</p>
                <img src= {this.props.img}/>
            </div>
        )
    }
}