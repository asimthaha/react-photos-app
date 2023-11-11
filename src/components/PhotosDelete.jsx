import React from "react";
import PhotosNavbar from "./PhotosNavbar";

const PhotosDelete = () => {
  return (
    <>
      <PhotosNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12">
                <label htmlFor="" className="form-label">
                  Delete Photos
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12">
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotosDelete;
