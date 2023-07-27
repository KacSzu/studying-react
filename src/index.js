import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello react!</h1>;
}
// React v18
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before 18

export default App;
