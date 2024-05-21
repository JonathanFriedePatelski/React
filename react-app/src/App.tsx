import Knop from "./components/Knop";

function App() {
  return (
    <div>
       <Knop color="secondary" onClick={() => console.log('clicked')}>My button</Knop>
    </div>
  );
}

export default App;