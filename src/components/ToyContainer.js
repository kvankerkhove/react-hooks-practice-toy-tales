import React from "react";
import ToyCard from "./ToyCard";

//component Toy Conatiner takes in toys and two functions as props
function ToyContainer({ toys, onDeleteButton, onLikeButton }) {
  //map through toys and create ToyCard for each and passing toy and functions as props
  const renderToys = toys.map(toy => {
    //include key with toy id
    return <ToyCard key={toy.id} toy={toy} onDeleteButton={onDeleteButton} onLikeButton={onLikeButton} />
  })


  //ToyContainer returns JSX conrtaining all the the rendered toys
  return (
    <div id="toy-collection">
      {renderToys}
    </div>
  );
}

export default ToyContainer;
