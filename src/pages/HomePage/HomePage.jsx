import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchProducts,
	fetchPopularProducts,
} from '../../store/products/products-slice';
import Intro from '../../components/Sections/Main/Intro/Intro';
import PopularProducts from '../../components/Sections/Main/PopularProducts/PopularProducts';
import Categories from '../../components/Sections/Main/Categories/Categories';
import Services from '../../components/Sections/Main/Services/Services';
import ProductsWithScroll from '../../components/Sections/Main/ProductsWithScroll/ProductsWithScroll';

function HomePage() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProducts());
		dispatch(fetchPopularProducts());
	}, [dispatch]);

	const { allProducts } = useSelector((state) => state.products);
	// eslint-disable-next-line
	console.log(allProducts);

	return (
		<>
			<Intro />
			<Categories />
			<ProductsWithScroll />
			<PopularProducts />
			<Services />
			<ProductsWithScroll fastDelivery />
		</>
	);
}

export default HomePage;
