import { displayToast } from "../../toast";

export function setStopImmediatePropagationExample2Handlers(exampleNumber: number) {
  const button = document.querySelector<HTMLButtonElement>(`#stopImmediatePropagation .example-${exampleNumber} button`,)!;
  const span = button.querySelector("span")!

  button.addEventListener("click", () => {
    displayToast("BUTTON 1");
  });

  button.addEventListener("click", () => {
    displayToast("BUTTON 2");
  });

  button.addEventListener("click", () => {
    displayToast("BUTTON 3");
  });

  span.addEventListener("click", () => {
    displayToast("SPAN 1")
  })

  span.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    displayToast("SPAN 2")
  })
  span.addEventListener("click", () => {
    displayToast("SPAN 3")
  })
}