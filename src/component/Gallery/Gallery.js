import React from "react";
import "./gallery.css";
import Content from "../content/Content";
import gallery1 from "../../assets/gallery1.png";
import gallery2 from "../../assets/gallery2.png";
import galleryImage from '../../assets/galleryImage.png'

function Gallery() {
  return (
    <div className="gallery">
      <div className="contentAndImages">
        <Content
          title="GALLERY"
          header="Immersive beautiful co-working space gallery"
        />
        <div className="images">
          <div>
            <img className="subimage" src={gallery1} alt="image" />
            <img className="subimage" src={gallery2} alt="image" />
          </div>
          <div>
            <img className="subimage" src={gallery2} alt="image" />
            <img className="subimage" src={gallery1} alt="image" />
          </div>
        </div>
      </div>
      <img className="galleryImage" src={galleryImage} alt="image"/>
    </div>
  );
}

export default Gallery;
