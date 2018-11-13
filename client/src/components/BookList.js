import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`

class BookList extends Component {

    displayBooks() {
        let data = this.props.data;
        if (data.loading) {
            return(<div>Loading books...</div>)
        } else {
            return data.books.map(book => {
                return(
                    <li>{book.name}</li>
                )
            })
        }
    }

    render() {
        return (
            <div>
                <ul id='book-list'>
                    <li>Book name</li>
                </ul>
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);