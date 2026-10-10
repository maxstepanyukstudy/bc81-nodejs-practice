import createHttpError from "http-errors";
import { contactsList } from "../db/contactsList.js";

export async function getAllContacts(req, res) {
  res.status(200).json(contactsList);
}

export async function getContactById(req, res) {
  const id = Number(req.params.contactId);
  const contact = contactsList.find((contact) => contact.id === id);
  // // if (!contact) {
  // //   return res.status(404).json({
  // //     message: "Contact not found",
  // //   });
  // // }
  // if (!contact) throw new Error("Contact not found");
  if (!contact) throw new createHttpError(404, "Contact not found");

  res.status(200).json(contact);
}

export async function addContact(req, res) {
  const contact = req.body;

  const idList = contactsList.map((contact) => contact.id);
  const nextId = Math.max(...idList) + 1;
  const newContact = { ...contact, id: nextId };
  contactsList.push(newContact);

  res.status(200).json(newContact);
}
