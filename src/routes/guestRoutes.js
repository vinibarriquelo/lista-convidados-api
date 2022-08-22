import { Router } from "express";
import GuestController from "../controllers/GuestController.js";
const guestRouter = Router();

guestRouter.post('/', GuestController.create);
guestRouter.delete('/:id', GuestController.delete);
guestRouter.get('/', GuestController.getAllGuests);
guestRouter.put('/:id', GuestController.update);
guestRouter.put('/idMesa/:id', GuestController.updateIdMesaConvidado);

export { guestRouter };