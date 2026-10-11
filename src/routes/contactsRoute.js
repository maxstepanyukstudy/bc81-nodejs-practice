import { Router } from "express";
import {
  addContact,
  getAllContacts,
  getContactById,
} from "../controllers/contactControllers.js";
import { authenticate } from "../middleware/authenticate.js";

const contactsRouter = Router();

contactsRouter.use(authenticate);

contactsRouter.get("/", getAllContacts);
contactsRouter.get("/:contactId", getContactById);
contactsRouter.post("/", addContact);

export default contactsRouter;
