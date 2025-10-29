import { Component } from "react";

class Greeting extends Component {
    render() {
        return <h1>Hello, {/*this.props.name*/}!</h1>;
    }
}

class Button extends Component {
    // static contextType = ThemeContext;

    render() {
        const theme = this.context;
        const className = 'button -' + theme;
        return (
            <button className={className}>
                {/*this.props.children*/}
            </button>
        )
    }

}