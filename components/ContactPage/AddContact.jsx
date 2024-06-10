"use client";
import styles from "./AddContact.css";
import { useState } from "react";
import { parse } from "papaparse";
import Contact from "../../db/models/Contacts";

export default function AddContactPage() {
  const [contacts, setContacts] = useState([]);

  function handleManualSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setContacts((existing) => [...existing, data]);
  }

  function handleSaveContacts() {}

  return (
    <div className="add-contact-page">
      <h2>Add New Contacts</h2>
      <div className="contact-group">
        <form onSubmit={handleManualSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-Mail</label>
            <input name="email" type="email" />
          </div>
          <button type="submit">Add Contact</button>
        </form>
        <div
          className="drag-and-drop"
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            e.preventDefault();
            Array.from(e.dataTransfer.files)
              .filter((file) => file.type === "text/csv")
              .forEach(async (file) => {
                const text = await file.text();
                const result = await parse(text, { header: true });
                setContacts((existing) => [...existing, ...result.data]);
                console.log(result.data);
              });
          }}
        >
          Drag and Drop .CSV-File
        </div>
        <h3>New Contacts</h3>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.email}>
              <p className="add-contact-page_new-contacts_name">
                <strong>
                  {contact.firstName} {contact.lastName}
                </strong>
              </p>
              <p>{contact.email.toLowerCase()}</p>
            </li>
          ))}
        </ul>
        <button className="save-button">
          Save {contacts.length} {contacts.length > 1 ? "Contacts" : "Contact"}
        </button>
      </div>
    </div>
  );
}
