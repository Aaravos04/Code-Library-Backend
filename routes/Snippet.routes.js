import { Router } from "express";
import {
  addSnippet,
  getAllSnippets,
  deleteSnippet,
  updateSnippet,
} from "../controllers/Snippet.controller.js";

const Routes = Router();

Routes.post("/", addSnippet);
Routes.get("/", getAllSnippets);
Routes.delete("/:id", deleteSnippet);
Routes.put("/:id", updateSnippet);

export default Routes;
