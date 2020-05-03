import React from "react";
import VideoItem from "./video-item.component";

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => <VideoItem video={video} />);
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
