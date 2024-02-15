import { displayToast } from "../toast";

export function setStopImmediatePropagationHandlers() {
  const button = document.querySelector<HTMLButtonElement>("#stopImmediatePropagation .example-1 button",)!;
  const span = button.querySelector("span")!

  button.addEventListener("click", () => {
    displayToast("BUTTON 1");
  });

  button.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    displayToast("BUTTON 2");
  });

  button.addEventListener("click", () => {
    // This should not be displayed
    displayToast("BUTTON 3");
  });

  span.addEventListener("click", () => {
    displayToast("SPAN 1")
  })
}