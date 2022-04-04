import { TYPE_ERROR, TYPE_LOG, TYPE_WARN } from "./constants.js";

function logger(log, type = TYPE_LOG) {
  console[type](log);
}

export default logger;
