import "./App.css";
import Card from './components/card'

function App() {

  let myObj = {
    userName : "shailendra",
    age : 28
  }

  let arr = [1, 2, 3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-5">
        Tailwind Test
      </h1>
      <Card btnTxt="Visit Me" someObj = {myObj} someArr = {arr}/>
    </>
  );
}

export default App;
