import Button from "./Button.js";
//
import { GiAbstract008 } from "react-icons/gi";
import { GiAbstract016 } from "react-icons/gi";
import { GiAbstract024 } from "react-icons/gi";
import { GiAbstract032 } from "react-icons/gi";
import { GiAbstract040 } from "react-icons/gi";
//
const handleClick = () => {
  console.log("clicked");
};

function App() {
  return (
    <div>
      <Button primary outline rounded onClick={handleClick}>
        <GiAbstract008 />
        Osman
      </Button>
      <Button secondary outline rounded onMouseEnter={handleClick}>
        <GiAbstract016 />
        Oztuzel
      </Button>
      <Button success outline rounded>
        <GiAbstract024 />
        Siirt
      </Button>
      <Button wise outline rounded>
        <GiAbstract032 />
        Konya
      </Button>
      <Button danger outline rounded>
        <GiAbstract040 />
        Coding
      </Button>
    </div>
  );
}

export default App;
