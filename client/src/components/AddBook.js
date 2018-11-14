import React, { Component } from 'react';
import {graphql, compose} from 'react-apollo';
import {getAuthorsQuery, addBookMutation, getBooksQuery} from '../queries/queries';

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        }
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitForm = event => {
        event.preventDefault();
        const {name, genre, authorId} = this.state;
        if (!name || !genre || !authorId) {
            alert('Please fill out the form.');
        } else {
            this.props.addBookMutation({
                variables: {
                    name: name,
                    genre: genre,
                    authorId: authorId
                },
                refetchQueries: [{query: getBooksQuery}]
            })
        }
        event.target.reset();
    }

    displayAuthors() {
        let data = this.props.getAuthorsQuery;
        if (data.loading) {
            return(<option disabled>Loading authors...</option>)
        } else {
            return data.authors.map(author => {
                return(<option key={author.id} value={author.id}>{author.name}</option>)
            })
        }
    }

    render() {
        return (
            <form id='add-book' onSubmit={this.submitForm}>

                <div className='field'>
                    <label>Book Name:</label>
                    <input type='text' name='name' value={this.value} onChange={this.changeHandler}/>
                </div>

                <div className='field'>
                    <label>Genre:</label>
                    <input type='text' name='genre' value={this.value} onChange={this.changeHandler}/>
                </div>

                <div className='field'>
                    <label>Author:</label>
                    <select name='authorId' value={this.value} onChange={this.changeHandler}>
                        <option>Select author</option>
                        {this.displayAuthors()}
                    </select>
                </div>

                <button>+</button>

            </form>
        );
    }
}

export default compose(
    graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
    graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook);