import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";


function App() {

const [plants, setPlants] = useState([])
const [search, setSearch] = useState("");
const [submittedData, submittedDataSetter] = useState([])


useEffect(() => {
  fetch("http://localhost:6001/plants")
      .then(r => r.json())
      .then(setPlants)
  }, [])


  const displayedListings = plants.filter((plant) =>
  plant.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="app">
      <Header />


      <PlantPage 
      plants={displayedListings}
      setSearch={setSearch}

      submittedDataSetter={submittedDataSetter}
      submittedData={submittedData}


      />
    </div>
  );
}

export default App;
