import { setStopPropagationHandlers } from "./stopPropagation";
import { setStopImmediatePropagationHandlers } from "./stopImmediatePropagation";

export function setHandlers() {
  setStopPropagationHandlers()
  setStopImmediatePropagationHandlers()
}