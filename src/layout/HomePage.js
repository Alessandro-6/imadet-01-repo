import Header from "../components/Header";
import IntroLogo from "../components/IntroLogo";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Categories from "../components/Categories";

function HomePage() {
  return (
    <div>
      <Header />
      <IntroLogo />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default HomePage;
