import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Projects2(props) {
  return (

<div class="container">
  <div class="row">
      {/* Here we map over each project item and return a new array of `li` elements that contains the project name */}
      {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}

      {props.Projects.map(item => (
    <div class="col-md-4 mb-5">
        <div class="card2 zoom">
        <div class="card-body">
        <h5 class="card-title">{item.title}</h5>

                        <h6 class="card-title">{item.GitHub}</h6>
                        <h6 class="card-title">{item.Heroku}</h6>

        <li className="list-group-item" key={item.id}>
            
          {item.name} <img src= { process.env.PUBLIC_URL + item.image } className="img-fluid" alt={item.title} />
        </li>
        
        </div>
        </div>
        </div>
        
        
      ))}

</div>

</div>
       

    
  );
}

export default Projects2;