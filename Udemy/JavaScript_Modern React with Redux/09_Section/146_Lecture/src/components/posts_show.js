import React, { Component } from 'react';
import { connect } from 'react-redux';
// action creator
import { fetchPost } from '../actions'

class PostsShow extends Component {
  componentDidMount() {
    // get matching id
    const { id } = this.props.match.params;
    // feed param to the action
    this.props.fetchPost(id);
  }
  render(){
    return (
      <div>
        Posts Show!
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps){
  return { post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);