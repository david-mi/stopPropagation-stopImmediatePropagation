import { displayToast } from "../toast";

export function setStopPropagationHandlers() {
  const button = document.querySelector<HTMLButtonElement>("#stopPropagation .example-1 button",)!;
  const span = button.querySelector("span")!

  button.addEventListener("click", () => {
    displayToast("BUTTON 1");
  });

  button.addEventListener("click", (event) => {
    event.stopPropagation();
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