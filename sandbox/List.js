import React, {Component} from "react"

class List extends Component {
    render() {
        //return react elements that should be displayed on UI
        return(
            <ol>
                {this.props.morningTasks.map((task, index) => <li key = {index}> {task} </li>)}
            </ol>)
    }
}

export default List