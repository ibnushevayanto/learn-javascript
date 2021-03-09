import { Component } from "./Component.js";

export default class Tooltip extends Component {
  constructor(closeTooltipHandler, type, text) {
    super(`#${type}`);
    this.text = text;
    this.closeTooltipHandler = closeTooltipHandler;
    this.create();
  }
  closeTooltip() {
    this.closeTooltipHandler();
    this.detach();
  }
  create() {
    const tootltipElement = document.createElement("div");
    tootltipElement.className = "card";

    const tooltipTemplate = document.getElementById("tooltip");
    const tooltipTemplateBody = document.importNode(
      tooltipTemplate.content,
      true
    );
    tooltipTemplateBody.querySelector("p").textContent = this.text;
    tootltipElement.append(tooltipTemplateBody);

    const hostElPosLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight;
    const parentElementScrolling = this.hostElement.parentElement.scrollTop;

    const x = hostElPosLeft + 20;
    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;

    tootltipElement.style.position = "absolute";
    tootltipElement.style.left = `${x}px`;
    tootltipElement.style.top = `${y}px`;

    tootltipElement.addEventListener("click", this.closeTooltip.bind(this));
    this.element = tootltipElement;
  }
}
