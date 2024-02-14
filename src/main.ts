import "./style.css";
import { layout } from "./views/layout";
import { setImmediatePropagationHandlers } from "./handlers/stopImmediatePropagation";

const rootElement = document.getElementById("app") as HTMLDivElement;
rootElement.innerHTML = layout;

setImmediatePropagationHandlers();
