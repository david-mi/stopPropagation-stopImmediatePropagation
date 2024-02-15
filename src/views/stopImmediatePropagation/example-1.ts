import { getSectionLayout } from "../sectionLayout"

const jsBlock =
  `button.addEventListener("click", () => {
  displayToast("BUTTON 1");
});

button.addEventListener("click", (event) => {
  event.stopImmediatePropagation();
  displayToast("BUTTON 2");
});

button.addEventListener("click", () => {
  displayToast("BUTTON 3");
});

span.addEventListener("click", () => {
  displayToast("SPAN 1")
})`

const htmlBlock =
  `&lt;button&gt;
  Button
  &lt;span&gt;Span&lt;/span&gt;
&lt;/button&gt;`


export const stopImmediatePropagationExample1 = getSectionLayout({
  target: "stopImmediatePropagation",
  exampleNumber: 1,
  htmlBlock,
  jsBlock,
})