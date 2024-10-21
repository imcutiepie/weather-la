import { useState } from "react";
import "./App.css";
import Search from "./components/search/search";

function App() {
  const [imgUrl] = useState("Light");
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // function changeBgColor(){
  //   setIsDarkMode(!isDarkMode);
  //   setImgUrl(isDarkMode ? 'Dark' : 'Light');
  // }

  return (
    <div className={imgUrl}>
      {/* <button className={isDarkMode ? 'lightThemeButton' : 'darkThemeButton'} onClick={changeBgColor}>{ isDarkMode ? 'Dark' : 'Light' }</button> */}
      <Search />
    </div>
  );
}

export default App;
