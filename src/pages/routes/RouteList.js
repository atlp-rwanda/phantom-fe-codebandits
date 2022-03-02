import { Link } from "react-router-dom";
import React from "react";

const RouteList = (props) => {
  const routes = props.routes;
  const id = props.id;
  const distance = props.distance;
  const company_buses = props.company_buses;
  const total_buses = props.total_buses;

  console.log(props, routes);

  return (
    <div className="route-list">
      <h2>{distance}</h2>
      {routes.map((route) => (
        <div className="blog-preview" key={route.id}> 
          
          <Link to={`/routes/${route.id}`}>
          <h2>{route.distance}</h2>
          <h2>{route.company_buses}</h2>
          <h2>{route.total_buses}</h2>
          <h2 className="text-lg">{route.route}</h2>
          </Link>

          {/* <button onClick= {() => handleDelete(blog.id)}>Delete</button> */}
        </div>
      ))}
    </div>
  );
};

export default RouteList;
