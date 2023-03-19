import Button from "../components/Button";
//
import { GiAbstract024 } from "react-icons/gi";
//
function BookCreate() {
  return (
    <form className=" flex flex-1  bg-purple-400 px-2.5 py-5">
      <input
        className="flex-1 border rounded-lg text-lg px-3 py-0.5 ml-3"
        type="text"
        placeholder="Create a new book"
      />
      <Button wise rounded className="flex px-5 py-5 text-lg">
        <GiAbstract024 />
        BookCreate
      </Button>
    </form>
  );
}

export default BookCreate;
