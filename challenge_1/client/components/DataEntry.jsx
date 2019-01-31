import React from "react";

const DataEntry = props => {
  return (
    <div>
      <div>{props.data.category2}</div>
      <div>{props.data.description}</div>
    </div>
  );
};

export default DataEntry;

// category1: "By place"
// category2: "Greece"
// date: "-300"
// description: "Pilgrims travel to the healing temples of Asclepieion to be cured of their ills. After a ritual purification the followers bring offerings or sacrifices."
// granularity: "year"
// lang: "en"
