import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component{
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',


            //shorten if statement meaning if the task is completed, change the
            //text styling to line-through, if not, no styling.  the ? is the if statement, the : is the else

            textDecoration: this.props.todo.completed ? 'line-through' : 'none',


        }

    }

    

    render(){
        //the below line, allows you to access the objects in the prop
        const { id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind
                    (this, id)} /> {'  '}
                { title }
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                
                </p>

            </div>
        )
    }
}
//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle={
    background: '#ff0000',
    color: '#ffff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
    



}

export default TodoItem