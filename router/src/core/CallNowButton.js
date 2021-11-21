import { Component } from "react";
import "../styles/callNowButton.css";

export default class CallNowButton extends Component {
  render() {
    const hotel = this.props.hotel;
    const phoneNum = `tel:${hotel.number + hotel.phone}`;
    return (
      <button className="btn btn-outline-primary">
        <a href={phoneNum}>CALL NOW CTA📞</a>
      </button>
    );
  }
}
