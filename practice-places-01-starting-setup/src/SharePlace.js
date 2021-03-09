import Modal from "./UI/Modal";
import Map from "./UI/Map";
import { getAddress } from "./Utility/Locations";

class SharePlace {
  constructor() {
    const formAddress = document.querySelector("form");
    const locateBtn = document.getElementById("locate-btn");

    locateBtn.addEventListener("click", this.getMyPlace.bind(this));
    formAddress.addEventListener("submit", this.submitFormHandler.bind(this));

    this.map = new Map()
  }
  selectPlace(coordinates) {
    this.map.render(coordinates)
  }
  getMyPlace() {
    const modalEl = new Modal(
      "loading-modal-content",
      "Loading location - please wait"
    );
    if (navigator.geolocation) {
      modalEl.show();
      navigator.geolocation.getCurrentPosition(
        (res) => {
          modalEl.hide();
          const position = {
            latitude: res.coords.latitude,
            longitude: res.coords.longitude,
          };
          this.selectPlace(position);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      alert("Your browser not support this feature");
      return;
    }
  }
  async submitFormHandler(e) {
    e.preventDefault();
    const value = e.target.querySelector("input").value;
    const modalEl = new Modal(
      "loading-modal-content",
      "Loading location - please wait"
    );

    modalEl.show();
    try {
      const coordinates = await getAddress(value);
      this.selectPlace(coordinates);
    } catch (error) {
      console.log(error);
    }

    modalEl.hide();
  }
}

const sharePlaceClass = new SharePlace();
