//entry point of our app - where all app will be run
//react elements are simply objects
import React, {Component} from 'react'; 
import ReactDOM from 'react-dom';
import Main from './Main.js'


const morningTasks = ['Brush teeth', 'Fix hair', 'Put on clothes', 'Feed cat', 'Pack lunch'];

ReactDOM.render(<Main/>, document.getElementById('root'));
