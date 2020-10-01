import React from "react";

export const Pet = ({ name, species, breed }) => {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, name),
  //     React.createElement("h2", {}, species),
  //     React.createElement("h2", {}, breed),
  //   ]);

  return (
    <div>
      <h1>{name}</h1>
      <h2>{species}</h2>
      <h2>{breed}</h2>
    </div>
  );
};
