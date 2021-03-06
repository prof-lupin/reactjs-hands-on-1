import React from "react";

const Pet = ({ id, name, species, breed, media, location }) => {
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }
  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${species} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
