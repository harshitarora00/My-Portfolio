import React from "react";

const ProjectItems = ({ item }) => {
  console.log(item.id);
  return (
    <div className="project--card" key={item.id}>
      <img src={item.image} alt="" className="project--img" />
      <h3 className="project--title">{item.title}</h3>
      <div className="project--description">{item.description}</div>
      <a
        href={item.code}
        className="project--button"
        target="_blank"
        rel="noreferrer"
      >
        Code
        <i className="fa-solid fa-arrow-right  project--button-icon"></i>
      </a>
      <a
        href={item.link}
        className="project--button"
        target="_blank"
        rel="noreferrer"
      >
        Link
        <i className="fa-solid fa-arrow-right  project--button-icon"></i>
      </a>
    </div>
  );
};

export default ProjectItems;
