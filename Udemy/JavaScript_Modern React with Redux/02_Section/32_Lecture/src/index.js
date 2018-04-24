// get React as a JS module
import React, {Component} from 'react';
// reactDOm
import ReactDOM from 'react-dom'
// import searchBar - needs a file path reference. Don't need .js if it is a .js file.
import SearchBar from './components/search_bar'
// import API Key
import getAPIKey from './api_key/api_key'
// api key
const API_KEY = getAPIKey();
// npm youtube api search
import YTSearch from 'youtube-api-search';
// import video List
import VideoList from './components/video_list'
// import video detail
import VideoDetail from './components/video_detail';
// get lodash
import _ from 'lodash';


// create a new component.  this component should produce some HTML
// from functional to class.  will keep track of the videos on its state....
class App extends Component {
  constructor(props){
    super(props);
    
    // selected video to this.state, we'll do this with a callback
    // add new prop
    this.state = { 
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('smurfs')
  }
  
  videoSearch(term){
    // so see data right away
    // fetching data
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // console.log(data);
      // and ref new prop
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }
  
  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
    return (
      <div>
        {/* throttle here */}
        {/* <SearchBar onSearchTermChange={term => this.videoSearch(term)} /> */}
        <SearchBar onSearchTermChange={videoSearch} />        
        <VideoDetail video={this.state.selectedVideo} />
        {/* add VideoList */}
        {/* videos will be passed as props to video_list.js */}
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} 
        />
      </div>
    )
  }
}

// take this components generated HTML and put it in the DOM
// React render App
ReactDOM.render(<App />, document.querySelector('.container'));

// Steps for converting from function component to class component
// 1.  need to make sure to import Component from React (or use React.Component...)
// 2.  redefine the function from const to class
// 3.  extend the function with Component to get its methods
// 4.  add a render method, put your data in there.
// 5.  constructor(if needed, but probably needed, why else would you convert?)