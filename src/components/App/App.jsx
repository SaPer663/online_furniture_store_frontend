import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
	fetchProducts,
	fetchPopularProducts,
	fetchCollections,
} from '../../store/products/products-slice';
import { getCart } from '../../store/cart/cart-slice';
import { HomePage, AboutPage } from '../../pages';
import styles from './App.module.css';
import Header from '../Sections/Header/Header';
import Footer from '../Sections/Footer/Footer';
import CartPage from '../../pages/CartPage/CartPage';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProducts());
		dispatch(fetchPopularProducts());
		dispatch(fetchCollections());
		dispatch(getCart());
	}, [dispatch]);

	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Header />
				<main id="main" className={styles.app__main}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/user" />
						<Route path="/chosen" />
						<Route path="/cart" element={<CartPage />} />
						<Route path="/arm-chairs" />
						<Route path="/tables" />
						<Route path="/wardrobes" />
						<Route path="/sofas" />
						<Route path="/sale" />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
