import React from "react";
import "./newsCards.css";
import { useState } from "react";
import allNews from "../../data";
import Loading from '../Loading/Loading'

function NewsCards() {
  const [visible, setVisible] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  const someNews = allNews
    .slice(0, visible)
    .map(({ src, title, header, description, readMore }) => {
      return (
        <div className="newsCards">
          <img className="newsImage" src={src} alt="image" />
          <div className="newsContent">
            <p className="newsTitle">{title}</p>
            <p className="newsHeader">{header}</p>
            <p className="newsDescription">{description}</p>
            <p className="readMore">{readMore}</p>
          </div>
        </div>
      );
    });

  const handleOnClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisible((prev) => prev + 4);
      setIsLoading(false);
    }, 3000);
    //  setVisible((prev) => prev + 4);
  };

  return (
    <>
      <div className="allNews">{someNews}</div>
      {isLoading ? (
       <Loading/>
      ) : (
        <button
          className={
            allNews.length === someNews.length ? "disappear" : "loadMore"
          }
          onClick={handleOnClick}
        >
          Load More
        </button>
      )}
    </>
  );
}

export default NewsCards;
