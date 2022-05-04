import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  //set state for showForm and toys on page
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  
  //fetch data from json file and set toys to said data
  //use empty array dependency so fetch only runs once 
  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(toys => setToys(toys))
  }, [])

  //function takes in newToy passed through callback by ToyForm and makes POST REQUEST
  //requst adds new toy to data and sets toys state 
  const onToyFormSubmit = (newToy) => {
    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
      .then(res => res.json())
      .then(newToy => setToys([...toys, newToy]))
  }
  
  //function takes in id passed through callback in ToyCard and deletes toy from toys
  //with matching id
  const onDeleteButton = (id) => {
    const updatedToys = toys.filter(toy => toy.id !== id)
    setToys(updatedToys)
  }

  //function takes in updatedToy as parameter through callback in ToyCard
  const onLikeButton = (updatedToy) => {
    //map through toys and update only the toy with matching id
    const updatedToys = toys.map(toy => {
      if (toy.id === updatedToy.id){
        return updatedToy
      } else {
        return toy
      }
    })
    //set state to updatedToys
    setToys(updatedToys)
  }


  //When "Add a Toy" is clicked, show form if hidden or hide form if visible
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  //App returns JSX
  //Children include Header, ToyForm, ToyContainer
  return (
    <>
      <Header />
      {/* if showForm is true, show Toy Form. if false, return null */}
      {showForm ? <ToyForm onToyFormSubmit={onToyFormSubmit}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer onDeleteButton={onDeleteButton} onLikeButton={onLikeButton} toys={toys}/>
    </>
  );
}

export default App;
