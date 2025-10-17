"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_mysql_1 = require("./db-mysql");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 8080;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', async (req, res) => {
    const users = await (0, db_mysql_1.getUsers)();
    res.send(users);
});
app.get('/create-user', async (req, res) => {
    const createdUser = await (0, db_mysql_1.creteUser)('Ivan', 'Ivanov', 33);
    res.send(createdUser);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
