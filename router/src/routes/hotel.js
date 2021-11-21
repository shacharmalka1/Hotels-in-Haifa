import { useParams } from "react-router-dom";
import HotelPage from "../core/HotelPage";
import { getHotels } from "../data";
export default function Hotel() {
  let params = useParams();
  const hotelArray = [...getHotels()];
  const hotel = hotelArray.find((hotel) => hotel.number == params.hotelName);
  console.log(params.hotelName);
  return <HotelPage hotel={hotel} />;
}
