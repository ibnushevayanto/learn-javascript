import { DOMHelper } from "./DOMHelper.js";

export class ProjectItem {
  isTooltipShowing = false;
  constructor(id, switchHandler, type) {
    this.id = id;
    this.switchHandler = switchHandler;
    this.type = type;
    this.switchButtonHandler(type);
    this.showTooltip();
    this.connectDragHandler();
  }

  showInfoHandler() {
    if (this.isTooltipShowing) {
      return;
    }
    const container = document.getElementById(this.id);

    // * dynamic import

    import("./Tooltip.js").then((module) => {
      const tooltip = new module.default(
        () => {
          this.isTooltipShowing = false;
        },
        this.id,
        container.dataset.extraInfo
      );
      tooltip.attach();

      this.isTooltipShowing = true;
    });
  }

  showTooltip() {
    const btnMoreInfo = document.querySelector(
      `#${this.id} button:first-of-type`
    );
    btnMoreInfo.addEventListener("click", this.showInfoHandler.bind(this));
  }

  connectDragHandler() {
    const element = document.getElementById(this.id);
    element.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", this.id);
      e.dataTransfer.effectAllowed = "move";
    });
    element.addEventListener("dragend", (e) => {
      if (e.dataTransfer.dropEffect === "none") {
        alert("Drag & drop gagal dilakukan");
      }
    });
  }

  switchButtonHandler(type) {
    let button = document.querySelector(`#${this.id} button:last-of-type`);
    button = DOMHelper.clearNode(button);
    button.textContent = type === "active" ? "Finish" : "Activate";
    button.addEventListener("click", this.switchHandler.bind(null, this.id));
  }

  update(fnSwitchHandler, type) {
    this.switchHandler = fnSwitchHandler;
    this.switchButtonHandler(type);
  }
}
