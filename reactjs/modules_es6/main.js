// Modules: import va export
import logger from "./logger/index.js";
// import { TYPE_WARN, TYPE_ERROR } from "./constants.js";
import * as constants from "./constants.js";

logger("Test message...", constants.TYPE_WARN);
console.log(constants);

// console.log(typeof logger)
//export default chỉ được một cái duy nhất
//export không hạn chế
