import React, { Component } from 'react';
import booksRef from './firebase.js';
import styled from 'react-emotion';

const Book = styled('div')`
  display: flex;
  margin: 1rem;
  font-family: 'Roboto', sans-serif;
  border-bottom: 1px solid #CCC;
  padding: 1rem 0;
`;

const BookImage = styled('div')`
  margin-right: 1rem;
  background-image: url(${props => props.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png'});
  background-position: center;
  background-size: contain;
  width: 12%;
  height: 11rem;
  background-repeat: no-repeat;
`;

const BookInfo = styled('div')`
  width: 88%;
`;

const Title = styled('div')`
  font-weight: bold;
  font-size: 1.35rem;
  margin-bottom: 1rem;
`;

class App extends Component {
  state = {
    books: []
  }
  componentDidMount() {
    booksRef.on('value', snapshot => {

      let books = [];

      snapshot.val().forEach(book => {
        books.push(book)
      });

      this.setState({books: books});
    });

  }
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Sarahs Booklist:
        </p>
        <h4>{`${this.state.books.length} books`}</h4>

        {this.state.books.map(book => (
          <Book key={book.book_id}>
            <BookImage url={book.thumb_small}/>
            <BookInfo>
              <Title>{book.title}</Title>
              <div>{`Author: ${book.author}. ${book.page_count} pages. Published: ${book.publish_date}`}</div>
              <p>{book.description}</p>
            </BookInfo>
          </Book>
          )
        )}
      </div>
    );
  }
}

export default App;
