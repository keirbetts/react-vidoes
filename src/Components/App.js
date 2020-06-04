import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  state = { videos: [], selectedVideo: null }

  componentDidMount() {
    this.handleSearchSubmit('art tatum')
  }


  handleSearchSubmit = async term => {
    const res = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0]
    })

  }

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }
  //Defined a new callback method, in the render is passed as a prop to the videolist

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.handleSearchSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList onVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
            </div>
            {/* passes state down on the videos prop */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;