import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
  renderField(field){
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    )
  }
  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">
            Return to Index
          </Link>
        </div>
        <form>
          <Field 
            label="Title for Post"
            name="title"
            component={this.renderField}
          />
          <Field 
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field 
            label="Post Content"
            name="content"
            component={this.renderField}
          />
        </form>
      </div>
    );
  }
}

function validate(values){
  const errors = {};
  // if no title, then add a title to error object and fail the validation
  if(!values.title){
    errors.title = 'Please Enter a Valid Title'
  }
  if(!values.categories){
    errors.categories = 'Please Enter a Valid Category'
  }
  if(!values.content){
    errors.content = 'Please Enter Valid Content'
  }
  
  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(PostsNew) ;