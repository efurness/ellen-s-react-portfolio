import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Projects(props) {
  return (
    <ul className="list-group">
      {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
      {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
      
      {props.Projects.map(item => (
        <li className="list-group-item" key={item.id}>
            
          {item.name} <img src= { process.env.PUBLIC_URL + item.image } className="img-fluid" alt={item.title} />
        </li>
        
      ))}
    </ul>
  );
}

export default Projects;