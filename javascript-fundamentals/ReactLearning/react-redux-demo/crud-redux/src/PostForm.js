import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {
    state = {
        title: '',
        message: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.state.title;
        const message = this.state.message;
        const data = {
            id: new Date(),
            title,
            message,
            editting: false
        };
        this.props.dispatch({
            type: 'ADD_POST',
            data
        });
        this.setState({
            title: '',
            message: ''
        }); 
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">Create Post</h1>
                <form className="form" onSubmit={this.handleSubmit}>
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
                    <button>Post</button>
                </form>
            </div>
        );
    }
}
export default connect()(PostForm);