import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { RouterProvider } from "react-router-dom";
import router from "./Pages/Router/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
