import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Content from "./Components/Content";
import { heroLinks, contentLinks } from "./constants/index";

const App = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <Header />
        <Hero items={heroLinks} />
        <Content items={contentLinks} />
      </div>
    </>
  );
};

export default App;
