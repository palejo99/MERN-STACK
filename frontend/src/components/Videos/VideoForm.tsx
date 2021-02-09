import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { Video } from "./Video";
import { useHistory } from "react-router-dom";
import * as videoService from "./VideoService";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const VideoForm = () => {
  const history = useHistory();
  const initialState = {
    title: "",
    description: "",
    url: "",
  };
  const [video, setVideo] = useState<Video>(initialState);

  const handleInputChange = (e: InputChange) => {
    // Se hace una copia del video actual, y ya luego va a cambiar
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Se le pasa como parámetro el vídeo actual que está creando el usuario
    // const res = await videoService.createVideo(video);
    await videoService.createVideo(video);
    toast.success("New video added");
    setVideo(initialState);
    //  history.push("/");
    // console.log(res);
  };
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="car-body">
            <h3>New Video</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Write a title for this video"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.title}
                  autoFocus
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.url}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Write a description"
                  onChange={handleInputChange}
                  value={video.description}
                ></textarea>
                <button className="btn btn-primary">Create Video</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
