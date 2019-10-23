import React, {Component} from "react"
import List from './List'
import Title from './Title'

class Main extends Component {
    render(){
        return(
            <div>
                <Title title = {'Morning Routine: Part 1'}/>
                <List morningTasks = {['Put on mascara', 'Cuddle the cat']}/>
                <Title title = {'Morning Routine: Part 2'}/>
                <List morningTasks = {['Brush teeth', 'Fix hair', 'Put on clothes', 'Feed cat', 'Pack lunch']}/>
            </div>
        )
    }
}

export default Main