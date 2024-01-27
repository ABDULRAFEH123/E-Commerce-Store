
import Header from "../components/Header"
// import Hero from "../components/home/Hero";
import Footer from "../components/Footer";
const Main = props => {
	return (
		<>
			<Header />
			{/* <Hero/> */}
			{props.children}
			{/* <footer>Main Footer</footer> */}
			<Footer/>
		</>
	);
};

export default Main;
