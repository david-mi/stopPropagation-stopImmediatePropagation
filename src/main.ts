import "./style.css";
import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'prismjs';
import { layout } from "./views/layout";
import { setImmediatePropagationHandlers } from "./handlers/stopImmediatePropagation";

const rootElement = document.getElementById("app") as HTMLDivElement;
rootElement.innerHTML = layout;
Prism.highlightAll()

setImmediatePropagationHandlers();