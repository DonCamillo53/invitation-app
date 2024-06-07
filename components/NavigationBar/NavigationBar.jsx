import styles from "./NavigationBar.module.css";
import Link from "next/link";
import Image from "next/image";

export function NavigationBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href={"/"}>
            <Image src="/icons8-dashboard-96.png" width={30} height={30} />
            Dashboard
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <Image src="/icons8-contacts-96.png" width={30} height={30} />
            Contacts
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <Image src="/icons8-for-you-96.png" width={30} height={30} />
            Invitation
          </Link>
        </li>
      </ul>
    </nav>
  );
}
