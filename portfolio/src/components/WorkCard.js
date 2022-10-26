import "./WorkCardStyles.css";
import React from 'react';

const WorkCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="Prison-Breaker" />
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                  <p>{props.text}</p>
                  <h4>Technologies:</h4> <h3>{props.technologies}</h3>
                  <div className="pro-btns">
                    <a href={props.view} className="btn">View</a>
                    <a href={props.source} className="btn">Source</a>
                  </div>
                </div>
            </div>
  )
}

export default WorkCard
