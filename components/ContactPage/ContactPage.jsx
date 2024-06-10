import AddContactPage from "./AddContact";
import Contacts from "./Contacts";
import styles from "./ContactPage.css";

export function ContactPage() {
  return (
    <div className="contact-page-card">
      <AddContactPage />
      <Contacts />
    </div>
  );
}
