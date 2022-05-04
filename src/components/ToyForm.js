import React, { useState } from "react";


//components ToyForm takes in one prop, the callback function from App:22
function ToyForm({ onToyFormSubmit }) {
  //create state for the "Add a toy" form data 
  //with the initial value being an object with name, image, and likes
  const [formData, setformData] = useState({
    name: "",
    image: "",
    likes: 0
  })


  return (
    <div className="container">
      {/* submit event listener on form, passes state (formData) into callback function
      to be ussed in App */}
      <form onSubmit={(e) => {
        e.preventDefault()
        onToyFormSubmit(formData)
      }}
        className="add-toy-form">
        <h3>Create a toy!</h3>
        <input 
          // on change event listener for the "enter a toy name" input box
          // sets the formData state to whatever was entered in the box
          onChange={(e) => setformData({...formData, name: e.target.value})}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          //setting value equal to state makes it a controlled form
          value={formData.name}
        />
        <br />
        <input
          // on change event listener for the "enter a toy image" input box
          // sets the formData state to whatever was entered in the box
          onChange={(e) => setformData({...formData, image: e.target.value})}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          //setting value equal to state makes it a controlled form
          value={formData.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
