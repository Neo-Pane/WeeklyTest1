import "./App.css";
import Navbar from "./Components/Navbar";
import Title from "./Components/Title";
import Content from "./Components/Content";
import Contentline from "./Components/Contentline";
import Contentname from "./Components/Contentname";
import Achievement from "./Components/Achievement";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Content />
      <Contentline />
      <Contentname />
      <Title />
      <Navbar />
      <Achievement />
      <Footer />
    </div>
  );
}
export default App;
