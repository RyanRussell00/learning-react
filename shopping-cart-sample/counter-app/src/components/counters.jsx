import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 2 },
            { id: 2, value: 10 },
            { id: 3, value: 0 },
            { id: 4, value: 3 },
        ],
    };
    render() {
        return (
            <div>
                {this.state.counters.map((counter) => (
                    <Counter key={counter.id} value={counter.value}>
                        {/* Things between the closing and opening tags are known as 
                        "children props" and can be accessed by 'this.props' inside
                        the Counter class
                         <h3>Counter #{counter.id}</h3> */}
                    </Counter>
                ))}
            </div>
        );
    }
}

export default Counters;
