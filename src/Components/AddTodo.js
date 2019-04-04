import React, { Component } from 'react'

class AddTodo extends Component {
        state = {
            title: ' '

        }

        onSubmit = (e) => {
            e.preventDefault();
            this.props.addTodo(this.state.title);
            this.setState({title: ' '});
        }



        //sets the state of the todo field title to whatever the user enters in the box
        //if you put e.target.name in [], it will work the same and you can use the event as often as you'd like for multiple fields
        onChange = (e) => this.setState({[e.target.name]: e.target.value});

        render(){
            return(
                <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                    <input 
                        type="text" 
                        name="title" 
                        style={{flex: '10' ,padding: '5'}}
                        placeholder="Add New Item"
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    <input 
                        type="submit" 
                        value="submit"
                        className="btn"
                        style={{flex: '1'}}
                        />
                </form>
            )
            }    
}

export default AddTodo;