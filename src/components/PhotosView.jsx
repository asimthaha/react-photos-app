import axios from "axios";
import React, { useEffect, useState } from "react";
import PhotosNavbar from "./PhotosNavbar";

const PhotosView = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        changeData(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <PhotosNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              {data.map((value, index) => {
                return (
                  <div className="col col-12 col-md-6 col-sm-6 col-lg-4 col-xl-3 col-xxl-3">
                    <div class="card">
                      <img src={value.url} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h1 class="card-text">Title: {value.title}</h1>
                        <p className="card-text">
                          Thumbnail{value.thumbnailUrl}
                        </p>
                        <p>Album id: {value.albumId}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotosView;
