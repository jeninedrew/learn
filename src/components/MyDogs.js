import React, { Component } from "react";
import data, { dogs } from "./json/data.json";

class MyDogs extends Component {
  render() {
    return (
      <ul>
        {dogs.map(function(eachDoggie) {
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
