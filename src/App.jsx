import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <header className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </header>
        <main>
        {/* <StarsCanvas /> */}
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
        </main>
        <footer className="relative z-0">
          <Contact />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
