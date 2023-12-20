import Nav from "./Components/Nav";
import Her from "./Components/Her";
import Cards from "./Components/Cards";
import State from "./Components/State";
import WordCounter from "./Components/WordCounter";
const App = () => {
  return (
    <div className="bg-blue-900 text-[#fff]">
      <Nav />
      <Her />
      <Cards />
      <WordCounter />
    </div>
  );
};

export default App;
