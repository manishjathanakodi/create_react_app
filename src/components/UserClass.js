import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count:0
        }
    }
    render() {
        const { name, age } = this.props;
        const { count } = this.state;
        return (
            <div>
                <button onClick={()=>{
                    this.setState({count:this.state.count+1})
                }}>{count}</button>

                <h1>{name}</h1>
                <h1>{age}</h1>
            </div>
        )
    }
}

export default UserClass;