import React from "react";
import imageHero from "../../assets/imageHero.png";
import "./heroSection.css";
import image from "../../assets/image.png";
import sub1 from "../../assets/sub1.png";
import sub2 from "../../assets/sub2.png";
import sub3 from "../../assets/sub3.png";
import Button from "../../component/button/Button";
import { useState } from "react";
import location from "../../assets/location.png";
import Group from '../../assets/Group.png'
import logo from '../../assets/logo.png'

function HeroSection() {
  const cities = [
    {
      id: "",
      src: location,
      name: "city",
    },

    {
      id: "1",
      name: "sohag",
      src:" https://www.google.com/maps/d/viewer?ie=UTF8&hl=en&msa=0&ll=26.460738%2C31.67358400000002&spn=1.721146%2C2.334595&z=8&source=embed&mid=1QVjVDmkVBBQulFFWttnStATAK40",
    },
    {
      id: "2",
      name: "city2",
      src: "map2",
    },
    {
      id: "3",
      name: "city3",
      src: "map3",
    },
    {
      id: "4",
      name: "city4",
      src: "map4",
    },
  ];

  const [selected, setSelected] = useState(null);
  const [map, setMap] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setSelected(e.target.value);
  };
  
  const handleClick = (selected) => {
    setMap(cities.find((x) => x.id === selected).src)
  
    
  };
  console.log(map);

  return (<>
    <div className="heroSection">
    {/* <img src="https://www.google.com/maps/d/viewer?ie=UTF8&hl=en&msa=0&ll=26.460738%2C31.67358400000002&spn=1.721146%2C2.334595&z=8&source=embed&mid=1QVjVDmkVBBQulFFWttnStATAK40"/> */}
      <div>
        <img className="imageHero" src={imageHero} alt="image" />
        <p className="titleHero">
          A new way to revolutionise your workspace to yourself
        </p>
        <div className="cityAndLocation">
          <div className="select">
            <select
              onChange={handleChange}
              selected={selected}
              placeholder="city"
            >
              {cities.map(({ id, name, src }) => {
                return (
                  <option key={id} value={id}>
                    <img src={src} />
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
          {selected ? (
            
              <a onClick={() => handleClick(selected)}  class="button" href="#popup1">
                <button className="view">
                view
                </button>
              </a>
           
          ) : (
            <p>location</p>
          )}
          <Button name="Schedule Visit" />
        </div>
        <div className="group">
          <img src={Group} alt="Group"/>
          <p>16 people booked a visit in last 24 hours</p>
        </div>
      </div>
      <div className="imagesHero">
        <img className="img" src={image} alt="image" />
        <img className="sub1" src={sub1} alt="aub1" />
        <img className="sub2" src={sub2} alt="aub2" />
        <img className="sub3" src={sub3} alt="aub3" />
        <p>Co Working</p>
      </div>
      <div id="popup1" class="overlay">
        <div class="popup" id="map">
          <p>{map}</p>
          <a class="close" href="#">
            &times;
          </a>
        </div>
      </div>
    </div>
    <img className="logo" src={logo} alt="logo"/> 
    </>
  );
}

export default HeroSection;
