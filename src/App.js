import Button from "./Button.js";

const handleClick = () => {
  console.log("clicked");
};

function App() {
  return (
    <div>
      <Button primary rounded onClick={handleClick}>
        App
      </Button>
      <Button secondary rounded onMouseEnter={handleClick}>
        Mpp
      </Button>
      <Button success rounded>
        Kpp
      </Button>
      <Button wise rounded>
        qpp
      </Button>
      <Button danger rounded>
        Tpp
      </Button>
    </div>
  );
}

export default App;
