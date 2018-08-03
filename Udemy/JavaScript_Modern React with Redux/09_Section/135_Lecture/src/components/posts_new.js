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
            name="title"
            component={this.renderField}
            label="Title"
          />
          <Field 
            name="tags"
            component={this.renderField}
            label="Tags"
          />
          <Field 
            name="Post Content"
            component={this.renderField}
            label="content"
          />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew) ;