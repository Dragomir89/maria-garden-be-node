"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// import { creteUser, getUsers } from './db-mysql';
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 8080;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', async (req, res) => {
    // const users = await getUsers();
    res.send('Hello World!');
});
app.get('/create-user', async (req, res) => {
    // const createdUser = await creteUser('Ivan', 'Ivanov', 33);
    res.send('User created');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
