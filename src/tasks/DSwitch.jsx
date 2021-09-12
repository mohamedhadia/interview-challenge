import { useState } from "react";
import { Moon } from "heroicons-react";

const DMSwitch = () => {
  const [darkMode, setdarkMode] = useState(true);
  const body = document.body;

  const toggle = () => {
    setdarkMode((prevState) => !prevState);
    if (darkMode) {
      // dark mode on
      body.className = "";
      body.classList.add("has-text-primary-light");
      body.classList.add("has-background-black");
    } else {
      // light mode on
      body.className = "";
      body.classList.add("has-text-black-ter");
      body.classList.add("has-background-white");
    }
    console.log(darkMode);
  };

  return (
    <div>
      <button className="ch4__dark-mode-btn" onClick={toggle}>
        <Moon fontSize={30} />
      </button>
    </div>
  );
};

export default DMSwitch;
