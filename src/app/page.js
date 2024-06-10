"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { HTMLeditor } from "../../components/HTMLeditor";
import { AddContactPage } from "../../components/ContactPage/AddContact";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar";
// import { HTMLeditor } from "../../components/HTMLeditor";
// import { POST } from "./api/emails/route";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavigationBar />
      {/* <button
        className="button"
        onClick={async () => {
          const buttonClick = await fetch("/api/emails", { method: "POST" });
          console.log("buttonClick", buttonClick);
        }}
      >
        button
      </button>
      <h1>HELLO</h1> */}
      <AddContactPage />
    </main>
  );
}
