import l from "leaflet";

export default class Map {
  constructor() {
    if (!this.mymap) {
      this.mymap = l.map("map");
      l.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        this.mymap
      );
    }
  }
  render(coordinates) {
    this.mymap.setView([coordinates.latitude, coordinates.longitude], 13);
    l.marker([coordinates.latitude, coordinates.longitude]).addTo(this.mymap);
  }
}
