import { displayToast } from "../toast";

export function setImmediatePropagationHandlers() {
  setWithButtonHandlers();
  setWithoutButtonHandlers();
}

function setWithButtonHandlers() {
  const withButton = document.querySelector<HTMLButtonElement>("#stopImmediatePropagation button",)!;
  const withButtonSpan = withButton.querySelector("span")!

  withButton.addEventListener("click", () => {
    displayToast("BUTTON 1");
  });

  withButton.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    displayToast("BUTTON 2");
  });

  withButton.addEventListener("click", () => {
    // This should not be displayed
    displayToast("BUTTON 3");
  });

  withButtonSpan.addEventListener("click", () => {
    displayToast("SPAN 1")
  })
}

function setWithoutButtonHandlers() {
  const withoutButton = document.querySelector<HTMLButtonElement>("#stopImmediatePropagation button",)!;

  withoutButton.addEventListener("click", () => {
    displayToast("FIRST");
  });

  withoutButton.addEventListener("click", () => {
    displayToast("SECOND");
  });

  withoutButton.addEventListener("click", () => {
    displayToast("THIRD");
  });
}
