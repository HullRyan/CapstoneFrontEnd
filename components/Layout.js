import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<>
			<div class="pageContainer">
				<Navbar />
				<main>{children}</main>
				<Footer />
			</div>
		</>
	);
}
