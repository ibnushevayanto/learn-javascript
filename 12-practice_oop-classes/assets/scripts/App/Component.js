export class Component {
  constructor(container, isBeforeElement = false) {
    if (container) {
      this.hostElement = document.querySelector(container);
    } else {
      this.hostElement = document.body;
    }
    this.isBeforeElement = isBeforeElement;
  }
  detach() {
    this.element.remove();
  }
  attach() {
    this.hostElement.insertAdjacentElement(
      this.isBeforeElement ? "beforebegin" : "beforeend",
      this.element
    );
  }
}
