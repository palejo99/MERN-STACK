import { RequestHandler } from "express";
import Video from "./Video";

export const createVideos: RequestHandler = async (req, res) => {
  //  console.log(req.body);
  try {
    const videoFound = await Video.findOne({ url: req.body.url });
    if (videoFound) {
      return res.status(301).json({ message: "The URL already exits" });
    }

    const video = new Video(req.body); // tomo los datos del cliente se guarda en objeto video
    console.log(video);
    const savedVideo = await video.save(); // Se guarda en la BD
    res.json(savedVideo); // Se envia respuesta al cliente de lo q se ha guardado en la BD
  } catch (e) {
    console.log(e);
  }
};

export const deleteVideos: RequestHandler = async (req, res) => {
  const videoFound = await Video.findByIdAndDelete(req.params.id);
  if (!videoFound) return res.status(204).json();
  return res.json(videoFound);
};

export const updateVideos: RequestHandler = async (req, res) => {
  const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }); // El último parámetro permite devolver el objeto recien actualizado
  if (!videoUpdated) return res.status(204).json();
  res.json(videoUpdated);
};

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find();
    return res.json(videos);
  } catch (e) {
    res.json(e);
  }
};

export const getVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findById(req.params.id);
  if (!videoFound) return res.status(204).json();
  return res.json(videoFound);
};
