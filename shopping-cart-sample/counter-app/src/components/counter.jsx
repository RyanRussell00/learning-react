import React, { Component } from "react";
class Counter extends Component {
    state = {
        count: this.props.value,
        tags: ["tag1", "tag2", "tag3"],
    };
    styles = {
        fontSize: 20,
        fontWeight: "bold",
    };

    // Use this constructor style to handle the issue with `this` is undefined
    // if the arrow functions don't work
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    //     this.handleDecrement = this.handleDecrement.bind(this);
    // }

    render() {
        return (
            <div>
                {/* Used to render children {this.props.children} */}
                <span style={this.styles} className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                {/* // Use arrow function as parameter so we can call the function
                // If we don't use arrow function then we are calling the
                function directly // Which is invalid since React needs a
                function reference as the onClick */}
                <button
                    onClick={this.handleIncrement}
                    style={{ fontSize: 30 }}
                    className="btn btn-secondary btn-sm m-2">
                    Increment
                </button>
                <button
                    onClick={this.handleDecrement}
                    style={{ fontSize: 30 }}
                    className="btn btn-secondary btn-sm m-2">
                    Decrement
                </button>
                <ul>{this.renderTags()}</ul>
            </div>
        );
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    handleDecrement = () => {
        this.setState({
            count: this.state.count == 0 ? 0 : this.state.count - 1,
        });
    };

    renderTags() {
        if (this.state.tags.length == 0) {
            return <p>No Tags</p>;
        }
        return (
            <ul>
                {this.state.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count == 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        if (count == 0) {
            return "Zero";
        }
        return count;
    }
}

export default Counter;
