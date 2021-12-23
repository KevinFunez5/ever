import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Schedule from "./components/Schedule";

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Services />
    <Schedule />
    </>
    );
}

export default App;
