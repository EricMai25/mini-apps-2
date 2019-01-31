import React from "react";
import DataEntry from "./DataEntry.jsx";

const DataList = props => {
    return(
  <div>
    {props.data.map(entry => {
       return <DataEntry data={entry} />;
    })}
  </div>

    )
};

export default DataList