import React from 'react';
import { Link } from 'react-router-dom';

const AddedBook = ({title}) => {
    return (
        <p>{title}</p>
    )
}
class AddAuthor extends React.Component {
    state = {
        author: '',
        imageUrl: '',
        books: [],
        bookToBeAdded: ''
    }

    onFieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onAddNewBook = () => {
        this.setState(prevState => ({
            books: prevState.books.concat([this.state.bookToBeAdded]),
            bookToBeAdded: ''
        }))
    }

    submitToAddAuthor = (event) => {
        event.preventDefault();
        // const newAuthor = {
        //     author: this.state.author,
        //     imageUrl: this.state.imageUrl,
        //     books: this.state.books
        // }
        this.props.addNewAuthor(this.state);
        this.props.history.push("/");
    }

    render(){
        console.log(this.props);
        return (                    
            <div>
                <form style={{marginLeft: '20px'}} onSubmit={this.submitToAddAuthor}>
                    <div>
                        <label htmlFor="authorName">Author</label>
                        <input type="text" id="authorName" name="author" value={this.state.author} onChange={this.onFieldChange}/>
                    </div>
                    <div>
                        <label htmlFor="imgURL">Image URL</label>
                        <input type="text" id="imgURL" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange}/>
                    </div>
                    <div>
                        <label htmlFor="books">Books</label>
                        {this.state.books.map(book => <AddedBook title={book} />)}
                        <div >
                            <input type="text" value={this.state.bookToBeAdded} 
                                name="bookToBeAdded"
                                placeholder="Book's title goes here..." 
                                onChange={ this.onFieldChange }
                            />
                            <input type="button" id="books" value='+' onClick={this.onAddNewBook} />
                        </div>
                    </div>
                    <button>Submit</button>
                </form>
                <Link to="/">Back To Homepage</Link>
            </div>
        )
    }
}

export default AddAuthor;