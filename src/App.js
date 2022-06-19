import About from './components/About';
import AllInOne from './components/AllInOne';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
// import Pricing from './components/Pricing';
// import Support from './components/Support'
import Blog from './components/Blog';
import Ourapp from "./components/Ourapp";
function App() {
  return (
    <>
      
      <Navbar />      
      <Hero />
      <Ourapp />      
      {/* <Support /> */}
      {/* <AllInOne /> */}
      {/* <Pricing /> */}
      <Blog />
      <About />
      <Footer />
    </>
  );
}

export default App;
