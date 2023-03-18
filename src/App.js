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
        App
      </Button>
      <Button secondary outline rounded onMouseEnter={handleClick}>
        <GiAbstract016 />
        Mpp
      </Button>
      <Button success outline rounded>
        <GiAbstract024 />
        Kpp
      </Button>
      <Button wise outline rounded>
        <GiAbstract032 />
        qpp
      </Button>
      <Button danger outline rounded>
        <GiAbstract040 />
        Tpp
      </Button>
    </div>
  );
}

export default App;
