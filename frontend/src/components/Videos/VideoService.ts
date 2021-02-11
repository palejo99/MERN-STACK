import axios from "axios";
import { Video } from "./Video";

const API = "http://localhost:7000";

export const getVideos = async () => {
  // retorna un arreglo de vídeos
  return await axios.get<Video[]>(`${API}/videos`);
};

export const createVideo = async (video: Video) => {
  return await axios.post(`${API}/videos`, video);
};

export const getVideo = async (id: string) => {
  // retorna un solo vídeo
  return await axios.get<Video>(`${API}/videos/${id}`);
};

export const updateVideo = async (id: string, video: Video) => {
  // retorna un solo vídeo
  return await axios.put(`${API}/videos/${id}`, video);
};

export const deleteVideo = async (id: string) => {
  // retorna un solo vídeo
  return await axios.delete(`${API}/videos/${id}`);
};
