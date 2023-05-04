import logo from "./logo.svg";
import profilePic from "./profilePic.svg";
import "./App.css";
import React from "react";
import Profile from "./Profile";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "ZAIDI Mohamed Lamine",
        bio: ` 
        A geologist is a scientist who studies the Earth, its structure, composition, and processes. They use their knowledge of geology to explore and understand the planet's history, as well as the natural resources it contains. Geologists often work in the field, collecting rock and soil samples and analyzing them in a laboratory setting. They also use a variety of tools and techniques to study the Earth's features, such as mountains, rivers, and geological formations. Geologists play a vital role in many industries, including mining, oil and gas exploration, environmental management, and construction. They work to understand the Earth's processes and help to inform decision-making for a range of activities and projects.
 `,
        imgSrc: profilePic,
        profession: "GEOLOGIST ENGINEER",
      },
      visibility: false,
      btnName: "Show",
    };
  }

  toggleVisibility = () => {
    this.setState({ visibility: !this.state.visibility });

    if (this.state.visibility === true) {
      this.setState({ btnName: "Show" });
    } else {
      this.setState({ btnName: "Hide" });
    }
    //
  };

  render() {
    return (
      <div className="App">
        {this.state.visibility && <Profile personne={this.state.person} />}
        <button
          type="button"
          className="simple"
          onClick={this.toggleVisibility}
        >
          {" "}
          {this.state.btnName}
        </button>
      </div>
    );
  }
}

export default App;
