import React, {useState} from "react";

function NewPlantForm({submittedData, submittedDataSetter}) {
  const [formData, formDataSetter] = useState({
    name: "",
    image: "",
    price: ""

  })
  function manageformData(event){
    let name = event.target.name
    let value = event.target.value

    formDataSetter({
        ...formData,
        [name]: value

    })
}

  function handleOnSubmit(event){
      event.preventDefault();
      const newFormData = { 
          name: formData.name, 
          image: formData.image, 
          price: formData.price,
        }
      submittedDataSetter([...submittedData, newFormData])
      formDataSetter({
        name: "",
        image: "",
        price: ""
    })

  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" onChange={manageformData} />

        <input type="text" name="image" placeholder="Image URL" onChange={manageformData}/>

        <input type="number" name="price" step="0.01" placeholder="Price" onChange={manageformData} />

        <button type="submit" onClick={handleOnSubmit}>Add Plant</button>
        
      </form>
    </div>
  );
}

export default NewPlantForm;
