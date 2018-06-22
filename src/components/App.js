import React, { Component, Fragment } from "react";
import "../css/App.css";
import Header from "./Header";
import Learn from "./Learn";
import Add from "./Add";
import Footer from "./Footer";
import data from "../json/data.json";

class App extends Component {
  goToAdd = e => {
    console.log(this.props.history.push(`/learning`));
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Fragment>
          {/* Return children with no wrapper for Grid! React.Fragment renders out to nothing! */}
          <Learn
            title="Review"
            data={data.review}
            history={this.props.history}
          />
          <Learn title="Watch" data={data.watch} history={this.props.history} />
          <Learn title="Read" data={data.read} history={this.props.history} />
        </Fragment>
        <Add />
        <Footer />
      </div>
    );
  }
}

export default App;
