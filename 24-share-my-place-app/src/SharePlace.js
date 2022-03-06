import { Modal } from "./UI/Modal.js";
import { Map } from "./UI/Map.js";
import {
  getCoordsFromAddress,
  getAddressFromCoords,
} from "./Utility/Locations.js";
class SharePlace {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");
    this.shareBtn = document.getElementById("share-btn");

    locateUserBtn.addEventListener(
      "click",
      this.getCurrentLocationHandler.bind(this)
    );
    addressForm.addEventListener("submit", this.findAddressHandler.bind(this));
    this.shareBtn.addEventListener("click", this.shareMapHandler);
  }
  shareMapHandler() {
    const sharedLink = document.getElementById("share-link");
    if (!navigator.clipboard) {
      shareLinkInput.select();
      return;
    }
    navigator.clipboard
      .writeText(sharedLink.value)
      .then((res) => {
        alert("Copied into clipboard");
      })
      .catch((err) => {
        alert("Failed copy url into clipboard");
      });
  }
  selectPlace(coordinates, address) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }

    this.shareBtn.disabled = false;
    const shareLinkInput = document.getElementById("share-link");
    shareLinkInput.value = `${location.origin}/my-place?address=${encodeURI(
      address
    )}&lat=${coordinates.lat}&lng=${coordinates.lng}`;
  }
  getCurrentLocationHandler() {
    if (!navigator.geolocation) {
      alert("Please update your browser or use chrome");
      return;
    }

    const modal = new Modal("loading-modal-content", "test");
    modal.show();

    navigator.geolocation.getCurrentPosition(
      async (success) => {
        modal.hide();
        const coordinates = {
          lat: success.coords.latitude,
          lng: success.coords.longitude,
        };
        const address = await getAddressFromCoords(coordinates);
        this.selectPlace(coordinates, address);
      },
      (error) => {
        alert("Gagal mendapatkan lokasi");
      }
    );
  }
  async findAddressHandler(e) {
    e.preventDefault();

    const address = e.target.querySelector("input").value;
    if (!address || address.trim().length === 0) {
      alert("Invalid address");
      return;
    }

    const modal = new Modal("loading-modal-content", "test");
    modal.show();

    try {
      const coordinates = await getCoordsFromAddress(address);
      this.selectPlace(coordinates, address);
    } catch (error) {
      console.log(error);
    }
    modal.hide();
  }
}

new SharePlace();
