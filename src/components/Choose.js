import React, { Component, Fragment } from "react";
import Header from "./Header";
import Learn from "./Learn";
import Add from "./Add";
import Footer from "./Footer";
import "../css/Choose.css";
import data from "../json/learn.json";
import {rando} from "../js/helper.js";

class Choose extends Component {

  render() {
    const review = data.review;
    const watch = data.watch;
    const read = data.read;
		const longer = data.longer;
		// all the learn data so components can generate theie own randos
    const allLearn = type => {
      return type;
		};
		// a starting rando so the URL can be pushed
		const randoLearn = type => {
			return rando(type);
		};
		
    return (
      <div className="Choose"> 
        <Header />
        <Learn 
          title="Review"
          allLearn={allLearn(review)}
          randoLearn={randoLearn(review)}
        />
        <Learn
          title="Watch"
          allLearn={allLearn(watch)}
          randoLearn={randoLearn(watch)}
        />
        <Learn
          title="Read"
          allLearn={allLearn(read)}
          randoLearn={randoLearn(read)}
        />
        <Learn
          title="Longer"
          allLearn={allLearn(longer)}
          randoLearn={randoLearn(longer)}
        />
        <Add />
        <Footer />
      </div>
    );
  }
}

export default Choose;
