import { useSelector } from "react-redux";
import "./App.css";
import ColorChange from "./components/ColorChange";
import FriendsList from "./components/FriendsList";
import BeFriends from "./components/BeFriends";

function App() {
  const background = useSelector((state) => state.theme.value);
  console.log(background);
  return (
    <div style={{ color: background.textcolor }} className="App">
      <h1 style={{ textAlign: "center" }}>
        Wanna Be My Friend? Fill The Form Below
      </h1>
      <div
        style={{ background: background.bgcolor, color: background.textcolor }}
        className="friendcontainer"
      >
        <div className="left">
          <BeFriends />
          <ColorChange />
        </div>
        <div className="right">
          <FriendsList />
        </div>
      </div>
    </div>
  );
}

export default App;
