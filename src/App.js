import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import "./css/styles.css"


function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Card 
          img="./images/katie-zaferes.png"
          rating="5.0" 
          reviewCount="(6)"
          country="USA"
          title="Life lessons with Katie Zaeferes"
          price="136" />
    </div>
  );
}

export default App;
