import Knop from "./components/Knop";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
       { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
       <Knop color="secondary" onClick={() => setAlertVisibility(true)}>My button</Knop>
    </div>
  );
}

export default App;