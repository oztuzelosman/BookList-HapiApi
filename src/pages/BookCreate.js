import Button from "../components/Button";
//
import { GiAbstract024 } from "react-icons/gi";
//
function BookCreate() {
  return (
    <form className=" flex flex-1 bg-purple-400">
      <input
        className="flex-1 border rounded-lg text-sm px-3 py-0.5"
        type="text"
        placeholder="Create a new book"
      />
      <Button wise rounded className="flex">
        <GiAbstract024 />
        BookCreate
      </Button>
    </form>
  );
}

export default BookCreate;