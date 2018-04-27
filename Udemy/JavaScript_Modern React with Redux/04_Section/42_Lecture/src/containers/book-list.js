import React, { Component } from 'react';
// import connect from React-Redux (sep library from either react or redux)
import { connect } from 'react-redux';

// export default class BookList extends Component {
class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return(
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      )
    })
  }
  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// this is the glue between React and Redux
function mapStateToProps(state){
  // what returns is props inside of booklist
  return {
    // what we want is an array of books
    books: state.books,
  };
}

// now use connect function
// connect takes a function and a Component and produces a contatiner
// container is aware of state...
export default connect(mapStateToProps)(BookList);