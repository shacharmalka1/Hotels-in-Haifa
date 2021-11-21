import { Component } from "react";
import CallNowButton from "./CallNowButton";

export default class HotelPage extends Component {
  render() {
    return (
      <main>
        {window.scrollTo(0, -1700)}

        <img src={this.props.hotel.img} alt="a" />
        <h2>{this.props.hotel.name}</h2>
        <CallNowButton hotel={this.props.hotel} />
      </main>
    );
  }
}
