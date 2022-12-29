import {
  Hero,
  Navbar,
  DashboarPreview,
  Analytics,
  Feature,
  Distribution,
  Footer,
  ArrowBack,
} from "./components";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <DashboarPreview />
      <Analytics />
      <Feature />
      <Distribution />
      <Footer />
      <ArrowBack />
    </div>
  );
}

export default App;
