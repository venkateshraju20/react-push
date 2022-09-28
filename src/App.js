import "./App.css";
import { Notifications } from "react-push-notification";
import PushButton from "./PushButton";

function App() {
  return (
    <div className="App">
      <Notifications />
      <h1>Push Notification example</h1>
      <header className="App-header">
        <PushButton />
      </header>
    </div>
  );
}

export default App;
