import React, {useState} from "react";




function PlantCard({plant}) {

const [sold, setSold] = useState(true)

function clickSold(){
  setSold(!sold)
}

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>


      {sold ? (
        <button className="primary" onClick = {clickSold}>In Stock</button>
      ) : (
        <button onClick = {clickSold}>Out of Stock</button>
      )}


    </li>
  );
}

export default PlantCard;
