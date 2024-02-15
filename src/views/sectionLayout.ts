interface SectionLayoutProps {
	exampleNumber: number
	htmlBlock: string
	jsBlock: string
}

export function getSectionLayout({ exampleNumber, htmlBlock, jsBlock }: SectionLayoutProps) {
	return `
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
		</article>`;
}
