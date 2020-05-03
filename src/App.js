import React from "react";
import "./App.css";
import SearchBar from "./components/seacrchbar.component";
import youtube from "./api/youtube";
import VideoList from "./components/video-list.component";

class App extends React.Component {
  state = { videos: [] };
  onFormSubmit = async (term) => {
    const key = "AIzaSyAkZ8r_yWCXVOf1JYhXlq7jdq1zO6Assls";
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: key,
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
    // console.log(response.data.items);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
