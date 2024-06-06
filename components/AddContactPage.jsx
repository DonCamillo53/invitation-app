"use client";

import { useState } from "react";
import { parse } from "papaparse";

export function AddContactPage() {
  const [contacts, setContacts] = useState([
    { firstName: "Peter", lastName: "Pan", email: "test@email.com" },
  ]);
  return (
    <div>
      <h1>Import Guest Contacts</h1>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="E-Mail" />
        <button type="submit">Add guest</button>
      </form>
      <div
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
    </div>
  );
}
