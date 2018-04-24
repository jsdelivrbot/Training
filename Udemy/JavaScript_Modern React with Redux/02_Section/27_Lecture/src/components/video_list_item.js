import React from 'react';

// const VideoListItem = (props) => {
const VideoListItem = ({video}) => {
  // this says there is ^^^ a param with prop video thats the {}
  // const video = props.video
  console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;
  const altText = `Image for: ${video.snippet.title}`;
  console.log(imageUrl);
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={imageUrl} alt={altText} className="media-object" />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem