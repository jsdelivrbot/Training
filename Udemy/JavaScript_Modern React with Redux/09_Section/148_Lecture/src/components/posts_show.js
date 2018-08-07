import React, { Component } from 'react';
import { connect } from 'react-redux';
// action creator
import { fetchPost } from '../actions'
// link tag
import { Link } from 'react-router-dom'

class PostsShow extends Component {
  
  componentDidMount() {
    // don't want to eager fetch?  put a conditional here
    // if(!this.props.post){
      // get matching id
      const { id } = this.props.match.params;
      // feed param to the action
      this.props.fetchPost(id);
    // }
  }
  
  render(){
    const { post } = this.props;
    
    // if no post (at all or now, do this)
    if(!post){
      return <div>Loading Empty Stuff!</div>
    }
    
    return (
      <div>
        <Link className="btn btn-primary" to="/">Back to Index</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps){
  return { post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);