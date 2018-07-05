import React, { Component } from "react";
import dogsData from "../json/dogs.json";

class MyDogs extends Component {
  render() {
    return (
      <ul>
        {dogsData.map(function(eachDoggie) {
          return (
            <li>
              {eachDoggie.id} - {eachDoggie.title} - {eachDoggie.url}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default MyDogs;
