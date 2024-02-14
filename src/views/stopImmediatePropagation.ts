const withCodeBlock = `
button.addEventListener("click", () => {
    displayToast("FIRST CALLBACK");
});
  
button.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    displayToast("SECOND CALLBACK");
});
  
button.addEventListener("click", () => {
    // This should not be displayed
    displayToast("THIRD CALLBACK");
});`

const withoutCodeBlock = `
button.addEventListener("click", () => {
    displayToast("FIRST CALLBACK");
});
  
button.addEventListener("click", () => {
    displayToast("SECOND CALLBACK");
});
  
button.addEventListener("click", () => {
    displayToast("THIRD CALLBACK");
});`

export const stopImmediatePropagationTemplate = `
<section id="stopImmediatePropagation">
    <h2>
        <span>event</span>
        <span>.</span>
        <span>stopImmediatePropagation()</span>
    </h2>
    <article class="with">
        <h3>With</h3>
        <pre>
            <code class="language-js">${withCodeBlock}</code>
        </pre>
        <button>Click</button>
    </article>
    <article class="without">
        <h3>Without</h3>
        <pre>
            <code class="language-js">${withoutCodeBlock}</code>
        </pre>
        <button>Click</button>
    </article>
</section>`;
