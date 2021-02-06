import axios from "axios";

export const getVideos = async () => {
  return await axios.get("http://localhost:7000/videos");
};
