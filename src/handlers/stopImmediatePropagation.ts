import { displayToast } from "../toast";

export function setImmediatePropagationHandlers() {
  setWithButtonHandlers();
  setWithoutButtonHandlers();
}

function setWithButtonHandlers() {
  const withButton = document.querySelector<HTMLButtonElement>("#stopImmediatePropagation .with button",)!;

  withButton.addEventListener("click", () => {
    displayToast("FIRST");
  });

  withButton.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    displayToast("SECOND");
  });

  withButton.addEventListener("click", () => {
    // This should not be displayed
    displayToast("THIRD");
  });
}

function setWithoutButtonHandlers() {
  const withoutButton = document.querySelector<HTMLButtonElement>("#stopImmediatePropagation .without button",)!;

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
