import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			
			<a href="/" target={"_blank"}>
        <h3>NFTY</h3>
      </a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
