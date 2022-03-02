import RouteList from "./RouteList.js";
import FetchData from "../../components/FetchData.js";
import React from "react";


const Home = () => {


const {data: routes, isPending, error} = FetchData('http://localhost:8000/routes')
 
  return (
    <div className="home">
      { error && <div>{ error }</div>}
      {isPending && <div>Loading</div>}
     { routes && <RouteList routes={routes} title="All routes" />}

    </div>
  );
};

export default Home;
