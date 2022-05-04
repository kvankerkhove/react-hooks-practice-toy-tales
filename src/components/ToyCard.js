import React from "react";

//component ToyCard takes in toy and two callbacks as props
function ToyCard({ toy, onDeleteButton, onLikeButton }) {
  //destructuring toy into individual properites
  const {id, name, image, likes} = toy

  //handle delete click event
  //when "Donate to Goodwill" clicked, run delete request and delete toy from json by using its specific id 
  const handleDelete = (e) => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    //pass id into callback to be used in App
    .then(() => onDeleteButton(id))
  }

  //handle like click event 
  //when "Like <3" clicked, run patch request to update toy in json by using its specific id
  const handleLikeButton = (e) => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({likes: +likes + 1})
    })
    .then(res => res.json())
    //pass updated toy object into callback to be used in App
    .then(updatedToy => onLikeButton(updatedToy))

  }

  //ToyCard returns JSX for each toy in json file
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikeButton} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
