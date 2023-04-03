import { React, useEffect, useState } from "react";

function Restaurant() {
  //create state to hold data from api and useState is set as empty array
  var [restaurantList, setRestaurant] = useState([])

  //funtion to call api using async await
  const fetchData = async () => {
    const result = await fetch('/restaurants.json')
    result.json().then(
        data => {
      setRestaurant(data.restaurants)
    })
  }
  
  //to check if fetchData is working
  console.log(restaurantList);

  //useEffect is a react hook that work first on a loading page 
  useEffect(()=>{
    fetchData()
  }
  //and empty array added here to stop useEffect from executing infinitly
  ,[]
  )

  return <div></div>;
}

export default Restaurant;
