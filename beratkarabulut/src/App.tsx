import About from "./components/About";
import './App.css'
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Loading from "./components/Loading";
import Contact from "./components/Contact";



function App() {
  return (
    <div className="main-container">
      <Hero />
      <About />
      <Tech />
      <Loading />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;