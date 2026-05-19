import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import ScrollTop from "./components/ScrollTop";


function App() {
  return (
    <main className="bg-[#f4f1ea] text-black min-h-screen overflow-hidden">
      <Navbar />

      <Hero />

      <Divider />

      <About />

      <Divider />

      <Projects />

      <Divider />

      <Skills />

      <Divider />

      <Contact />

      <Footer />

      <ScrollTop />
    </main>
  );
}

export default App;