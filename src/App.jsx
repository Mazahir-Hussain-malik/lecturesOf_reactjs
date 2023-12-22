import Nav from "./Components/Nav";
import Her from "./Components/Her";
import Cards from "./Components/Cards";
import State from "./Components/State";
import WordCounter from "./Components/WordCounter";
import Expanse from "./Components/Expanse";
const App = () => {
  return (
    <div className="bg-blue-900 text-[#fff]">
      <Nav />
      <Her />
      <Cards />
      <WordCounter />
      <Expanse />
    </div>
  );
};

export default App;
