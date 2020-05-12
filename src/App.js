import React from "react";

class App extends React.Component {
    state = {
        count: 0,
    };

    increment = () => {
        this.setState((state) => ({ count: state.count + 1 }))
    }

    decrement = () => {
        this.setState((state) => ({ count: state.count - 1 }))
    }

    render() {
        return (
            <div>
                <h1>Hello World!! live from webpack-dev-server</h1>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}

export default App;
