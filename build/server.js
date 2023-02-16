"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use((err, req, res, nxt) => {
    if (err instanceof Error) {
        //instanceof == typeof
        return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server errror'
    });
});
app.listen(3333, () => console.log('Server is running'));
