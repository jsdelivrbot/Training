// deosn't have a need for state.  so functional component

import React from 'react';

const VideoList = (props) => {
  return (
    <ul className='col-md-4 list-group'>
      {props.videos.length}
    </ul>
  )
}

export default VideoList;