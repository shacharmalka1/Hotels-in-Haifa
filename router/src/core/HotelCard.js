import { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

export default class HotelCard extends Component {
  render() {
    const hotel = this.props.hotel;
    return (
      <Link to={`/${hotel.number}`}>
        <li key={hotel.number}>
          <div id="card" className="card border-primary mb-3">
            <div className="card-header">
              <img className="card-img-top" src={hotel.img} alt="Card-cap" />
            </div>
            <div className="card-body text-primary">
              <h6 className="card-title">{hotel.name}</h6>
              <p className="card-text">street name: {hotel["street name"]}</p>
              <p className="card-text">number: {hotel.number}</p>
              <p className="card-text">phone: {hotel.phone}</p>
            </div>
          </div>
        </li>
      </Link>
    );
  }
}
