import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">
            Return to Index
          </Link>
        </div>
        <form action="">
          <Field 
            name="title"
            component={}
          />
        </form>
      </div>
    );
  }
}

export default PostsNew;