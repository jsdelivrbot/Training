import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field){
    const inputClassName = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
    return(
      <div className={inputClassName}>
        <label>{field.label}</label>
        <input className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    )
  }
  onSubmit(values){
    this.props.createPost(values, () => {this.props.history.push('/')});
  }
  
  render(){
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link className="btn btn-danger" to="/">
            Return to Index
          </Link>
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
})(
  connect(null, {createPost})(PostsNew)
);