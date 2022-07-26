import "./App.module.css";
import Headers from "../Headers/Headers";
import About from "../About/About";
import Menu from "../Menu/Menu";
import Info from "../Info/Info";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import MoreInfo from "../MoreInfo/MoreInfo";

function App() {
  return (
    <div className="">
      <Headers />
      <main>
        <About />
        <Menu />
        <Info />
        {/*<Gallery />*/}
        <MoreInfo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
