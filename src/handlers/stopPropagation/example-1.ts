import { displayToast } from "../../toast";

export function setStopPropagationExample1Handlers(exampleNumber: number) {
  const button = document.querySelector<HTMLButtonElement>(`#stopPropagation .example-${exampleNumber} button`,)!;
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