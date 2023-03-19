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
    <div className=" grid grid-cols-5 grid-rows-1 p-5">
      <Button primary rounded onClick={handleClick}>
        <GiAbstract008 />
        Osman
      </Button>
      <Button secondary rounded onMouseEnter={handleClick}>
        <GiAbstract016 />
        Oztuzel
      </Button>
      <Button success rounded>
        <GiAbstract024 />
        Siirt
      </Button>
      <Button wise rounded>
        <GiAbstract032 />
        Konya
      </Button>
      <Button danger rounded>
        <GiAbstract040 />
        Coding
      </Button>
    </div>
  );
}

export default App;
