import React, { Component } from 'react';
// import connect from React-Redux (sep library from either react or redux)
import { connect } from 'react-redux';
// get action
import { selectBook } from '../actions/index'
// this processes thorough reducers
import { bindActionCreators } from 'redux'

// export default class BookList extends Component {
class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return(
        <li 
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
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

// anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch){
  // this is action creator
  // this whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// now use connect function
// connect takes a function and a Component and produces a contatiner
// container is aware of state...
// export default connect(mapStateToProps)(BookList);
// this revised line - promote book list from component to container needs to know about mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(BookList);