export const getButtons = () => ({
  stopImmediatePropagation: {
    with: document.querySelector<HTMLButtonElement>(
      "#stopImmediatePropagation .with",
    ),
    without: document.querySelector<HTMLButtonElement>(
      "#stopImmediatePropagation .without",
    ),
  },
  stopPropagation: {
    with: document.querySelector<HTMLButtonElement>("#stopPropagation .with"),
    without: document.querySelector<HTMLButtonElement>(
      "#stopPropagation .without",
    ),
  },
});
