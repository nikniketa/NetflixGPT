import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App  h-full">
        <Body />
      </div>
    </Provider>
  );
}

export default App;
