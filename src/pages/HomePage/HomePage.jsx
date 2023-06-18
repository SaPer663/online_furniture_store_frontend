import styles from './HomePage.module.css';
import Intro from '../../components/Sections/Main/Intro/Intro';
import PopularProducts from '../../components/Sections/Main/PopularProducts/PopularProducts';
import Categories from '../../components/Sections/Main/Categories/Categories';
import Services from '../../components/Sections/Main/Services/Services';
import Bargain from '../../components/Sections/Main/Bargain/Bargain';
import FastDelivery from '../../components/Sections/Main/FastDelivery/FastDelivery';

function HomePage() {
	return (
		<main className={styles.container}>
			<Intro />
			<Categories />
			<Bargain />
      <PopularProducts />
			<Services />
			<FastDelivery />
		</main>
	);
}

export default HomePage;
