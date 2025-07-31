import Notes from "../Model/Note.js";
import express from "express";

const route = express.Router();

route.post("/notes", Notes);

export default route;
