import About from './components/About';
import KeepingSafe from './components/KeepingSafe';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'

import Support from './components/Support'
import Blog from './components/Blog';
import Ourapp from "./components/Ourapp";
import Protecting from './components/Protecting';
function App() {
  return (
    <>
      
      <Navbar />      
      <Hero />
      <Ourapp />
      <Protecting />      
      {/* <Support /> */}
      <KeepingSafe />
      
      
      <Blog />
      {/* <About /> */}
      <Footer />
    </>
  );
}

export default App;
