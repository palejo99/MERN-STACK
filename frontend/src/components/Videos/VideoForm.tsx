import React, { useState } from "react";

const VideoForm = () => {
  const [video, setVideo] = useState({});
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="car-body">
            <h3>New Video</h3>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Write a title for this video"
                  className="form-control"
                  autoFocus
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Write a description"
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
