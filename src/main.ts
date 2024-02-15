import "./style.css";
import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'prismjs';
import { globalLayout } from "./views/globalLayout";
import { setHandlers } from "./handlers";

const rootElement = document.getElementById("app") as HTMLDivElement;
rootElement.innerHTML = globalLayout;
Prism.highlightAll()

setHandlers();