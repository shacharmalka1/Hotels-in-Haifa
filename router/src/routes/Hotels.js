import { Link, Outlet } from "react-router-dom";
import HotelCard from "../core/HotelCard";
import { getHotels } from "../data";

export default function Hotels() {
  let hotels = getHotels();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <ul id="card-list">
          {hotels.map((hotel) => (
            <HotelCard hotel={hotel} />
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
