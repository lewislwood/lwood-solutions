"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
const pub = path_1.default.resolve(__dirname, process.env.static_folder || "../public");
console.log("static folder", pub);
app.set("view engine", "ejs");
app.use(express_1.default.static(pub));
app.use("/", require("./routes/404"));
app.listen(port, () => {
    console.log("Listening on ", port);
});
//# sourceMappingURL=server.js.map