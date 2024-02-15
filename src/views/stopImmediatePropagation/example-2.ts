import { getSectionLayout } from "../sectionLayout"

const jsBlock =
  `button.addEventListener("click", () => {
    displayToast("BUTTON 1");
  });

  button.addEventListener("click", () => {
    displayToast("BUTTON 2");
  });
  
  button.addEventListener("click", () => {
    displayToast("BUTTON 3");
  });
  
  span.addEventListener("click", (event) => {
    displayToast("SPAN 1")
  })
  
  span.addEventListener("click", () => {
    event.stopImmediatePropagation();
    displayToast("SPAN 2")
  })`

const htmlBlock =
  `&lt;button&gt;
  Button
  &lt;span&gt;Span&lt;/span&gt;
&lt;/button&gt;`


export const stopImmediatePropagationExample2 = getSectionLayout({
  target: "stopImmediatePropagation",
  exampleNumber: 2,
  htmlBlock,
  jsBlock,
})