import { Router } from "express";
import TableController from "../controllers/TableController.js";

const tableRouter = Router();

tableRouter.post('/', TableController.create);
tableRouter.delete('/:id', TableController.delete);
tableRouter.get('/', TableController.getAllTables);

export { tableRouter }