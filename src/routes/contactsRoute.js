import { Router } from "express";
import {
  addContact,
  getAllContacts,
  getContactById,
} from "../controllers/contactControllers.js";

const contactsRouter = Router();

contactsRouter.get("/", getAllContacts);
contactsRouter.get("/:contactId", getContactById);
contactsRouter.post("/", addContact);

export default contactsRouter;
