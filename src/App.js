import { useSelector } from "react-redux";
import "./App.css";
import ColorChange from "./components/ColorChange";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import BeFriends from "./components/BeFriends";

function App() {
  const background = useSelector((state) => state.theme.value);
  console.log(background);
  return (
    <div
      style={{ background: background.bgcolor, color: background.textcolor }}
      className="App"
    >
      <BeFriends />
      <FriendsList />
      <Login />
      <ColorChange />
    </div>
  );
}

export default App;
