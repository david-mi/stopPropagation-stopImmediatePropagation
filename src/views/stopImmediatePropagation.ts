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

const htlmBlock =
	`&lt;button&gt;
  Button
  &lt;span&gt;Span&lt;/span&gt;
&lt;/button&gt;`


export const stopImmediatePropagationTemplate = `
<section id="stopImmediatePropagation">
  <h2>
    <span>event</span>
    <span>.</span>
    <span>stopImmediatePropagation()</span>
  </h2>
  <article class="example example-1">
  		<h3>Example 1</h3>
			<div class="pre-wrapper">
				<div class="blocks">
					<h4>Structure</h4>
					<pre>
						<code class="language-html">${htlmBlock}</code>
					</pre>
				</div>
				<div class="blocks">
					<h4>Logic</h4>
					<pre>
						<code class="language-js">${jsBlock}</code>
					</pre>
				</div>
			</div>
			<button>
				Button
				<span>Span</span>
			</button>
  </article>
</section>`;
