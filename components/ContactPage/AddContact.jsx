"use client";
import styles from "./AddContact.css";
import { useState } from "react";
import { parse } from "papaparse";
import Contact from "../../db/models/Contacts";

export function AddContactPage() {
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
      <h1>Add New Contacts</h1>

      <form onSubmit={handleManualSubmit}>
        <div className="form-group">
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
          <button type="submit">Add</button>
        </div>
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
        DROP FILE HERE
      </div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.email}>
            <p>
              <strong>
                {contact.firstName} {contact.lastName}
              </strong>
            </p>
            <p>{contact.email}</p>
          </li>
        ))}
      </ul>
      <button>
        save {contacts.length} {contacts.length > 1 ? "contacts" : "contact"}
      </button>
    </div>
  );
}