import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="space-y-0">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
