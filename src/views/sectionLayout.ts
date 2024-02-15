interface SectionLayoutProps {
	exampleNumber: number
	htmlBlock: string
	jsBlock: string
	target: "stopImmediatePropagation" | "stopPropagation"
}

export function getSectionLayout({ exampleNumber, htmlBlock, jsBlock, target }: SectionLayoutProps) {
	return `
	<section id="${target}">
		<h2>
			<span>event</span>
			<span>.</span>
			<span>${target}()</span>
		</h2>
		<article class="example example-${exampleNumber}">
				<h3>Example ${exampleNumber}</h3>
				<div class="pre-wrapper">
					<div class="blocks">
						<h4>Structure</h4>
						<pre>
							<code class="language-html">${htmlBlock}</code>
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
}
