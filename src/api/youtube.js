import axios from "axios";

const key = "AIzaSyAkZ8r_yWCXVOf1JYhXlq7jdq1zO6Assls";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: key
  }
});
