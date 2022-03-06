import { Map } from "./UI/Map";
class MyPlace {
  constructor(coordinates, address) {
    new Map(coordinates);
    const headerTitle = document.querySelector("header h1");
    headerTitle.textContent = address;
  }
}

const url = new URL(location.href);
const searchParams = url.searchParams;

new MyPlace(
  { lat: +searchParams.get("lat"), lng: +searchParams.get("lng") },
  searchParams.get("address")
);
