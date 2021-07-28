import React,{useState} from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, submittedData}) {

  const [sold, setSold] = useState(true)

  function clickSold(){
    setSold(!sold)
}
   const submitedPlants = submittedData.map((data, uKey) =>{
    return (
      <div key={uKey}>
          <img src={data.image} alt={data.name} />
          <h4>{data.name}</h4>
          <p>Price: {data.price}</p>



          {sold ? (
        <button className="primary" onClick = {clickSold}>In Stock</button>
      ) : (
        <button onClick = {clickSold}>Out of Stock</button>
      )}
      </div>
      )
  })
  
  return (
    <ul className="cards">


      {plants.map((plant) => (
      <PlantCard 
      key={plant.id}
      plant ={plant}/>


      ))}
      <div>
      {submitedPlants}
      </div>

    </ul>
  );
}

export default PlantList;
