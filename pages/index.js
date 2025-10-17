import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Household Appliance Inventory</h1>

        <p className={styles.description}>
          Welcome to the Appliance Management System. Use the buttons below to navigate through the app.
        </p>

        <div className={styles.navButtons}>
          <Link href="/add" className={styles.navButton}>Add Appliance</Link>
          <Link href="/update" className={styles.navButton}>Update Appliance</Link>
          <Link href="/delete" className={styles.navButton}>Delete Appliance</Link>
          <Link href="/search" className={styles.navButton}>Search Appliance</Link>
          <Link href="/view" className={styles.navButton}>View All Appliances</Link>
        </div>
      </div>
    </div>
  );
}
