import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, setSearch,submittedData, submittedDataSetter}) {
  return (
    <main>
      <NewPlantForm 
        submittedDataSetter={submittedDataSetter}
        submittedData={submittedData}

        />
      <Search 
        onSearch={setSearch}
                        />
      <PlantList

        plants={plants} 
        submittedDataSetter={submittedDataSetter}
        submittedData={submittedData}
        />
        

      

    </main>
  );
}

export default PlantPage;
