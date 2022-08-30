import React from "react";
import visions from "../../assets/visions.png";
import Content from "../content/Content";
import "./visions.css";
import Button from "../button/Button";
import Roles from './Roles'


function Visions() {
  return (
    <div className="visions">
      <div>
        <Content
          title="visions"
          header="Our vision in 1-space to make something"
          description="Coworking is an arrangement in which workers of different companies share an office space, allowing cost savings and convenience through the use of common infrastructures services."
        />
       <Roles/>
        <Button name="Explore More" />
      </div>
      <img className="visionImage" src={visions} alt="Visions" />
    </div>
  );
}

export default Visions;
