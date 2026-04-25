import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Expertise } from "./components/Expertise";
import { TechStack } from "./components/TechStack";
import { Trajectory } from "./components/Trajectory";
import { Articles } from "./components/Articles";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { GlobalTechBackground } from "./components/GlobalTechBackground";

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 antialiased">
      <GlobalTechBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Expertise />
          <TechStack />
          <Trajectory />
          <Articles />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
