import React from 'react';
import {connect} from 'react-redux';

class EditPost extends React.Component {

    state = {
        title: this.props.post.title,
        message: this.props.post.message
    }

    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.state.title;
        const newMessage = this.state.message;
        const data = {
            newTitle,
            newMessage,
            editting: true
        };
        this.props.dispatch({
            type: 'UPDATE',
            id: this.props.post.id,
            data
        });
        // this.setState({
        //     title: '',
        //     message: ''
        // }); 
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        return (
            <div key={this.props.post.id} className="post">
                <form className="form" onSubmit={this.handleEdit}>
                    <input required type="text" 
                            // ref={input => this.getTitle = input}
                            name="title" value={this.state.title}
                            onChange={this.handleChange}
                            placeholder="Enter Post Title" />
                    <br /><br />
                    <textarea required rows="5" cols="28" 
                                // ref={input => this.getMessage = input}
                                name="message" value={this.state.message}
                                onChange={this.handleChange}
                                placeholder="Enter Post" />
                    <br /><br />
                    <button>Update</button>
                </form>            
            </div>
        )
    }
};

export default connect()(EditPost);
