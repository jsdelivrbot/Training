import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PostsNew extends Component {
  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">
            Return to Index
          </Link>
        </div>
        <h3>Posts New</h3>
      </div>
    );
  }
}

export default PostsNew;