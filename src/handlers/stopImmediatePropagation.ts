import { displayToast } from "../toast";

export function setImmediatePropagationHandlers() {
  setWithButtonHandlers();
  setWithoutButtonHandlers();
}

function setWithButtonHandlers() {
  const withButton = document.querySelector<HTMLButtonElement>("#stopImmediatePropagation .with button",)!;

  withButton.addEventListener("click", () => {
    displayToast("FIRST CALLBACK");
  });

  withButton.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    displayToast("SECOND CALLBACK");
  });

  withButton.addEventListener("click", () => {
    // This should not be displayed
    displayToast("THIRD CALLBACK");
  });
}

function setWithoutButtonHandlers() {
  const withoutButton = document.querySelector<HTMLButtonElement>("#stopImmediatePropagation .without button",)!;

  withoutButton.addEventListener("click", () => {
    displayToast("FIRST CALLBACK");
  });

  withoutButton.addEventListener("click", () => {
    displayToast("SECOND CALLBACK");
  });

  withoutButton.addEventListener("click", () => {
    displayToast("THIRD CALLBACK");
  });
}
