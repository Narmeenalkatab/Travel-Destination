
import React, { useState } from "react";


function allDescription({


    return description;
})

function DetailPage() {
  const [showFullDescription, setShowFullDescription] = useState(false);
}


function TourDetails(props){

const description = props.description;
 {
   data.map((element) => {
     return <Tours name={element.name} image_url={element.image} />;
   });
 }

  return (
    <div>
      <h1>Detail Page</h1>
      <p>{showFullDescription ? description : shortDescription}</p>
      <button onClick={allDescription}>
     see more
      </button>
    </div>
  );



}




 export default TourDetails;