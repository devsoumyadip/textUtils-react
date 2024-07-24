import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); //setting alert message

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#031524";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>  
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <div className="container my-3">
            
             <TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert} />
          
            
        </div>





          {/* <BrowserRouter>
    <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <div className="container my-3">
            <Routes>
              <Route path="/" element={<TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert} />} />
              <Route path="/about" element={<About />} />
            </Routes>
        </div>
           </BrowserRouter>         routes dont workproperly on github pages.....so commented and saved for future reff*/}
    </>
  );
}

export default App;
