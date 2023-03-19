import { useState } from "react";
//
import Button from "../components/Button";
//
import { RiHeartAddFill } from "react-icons/ri";
//
function BookCreate({ createBooks }) {
  const [inputVal, setInputVal] = useState("");

  const getInputChange = (event) => {
    const val = event.target.value;
    setInputVal(val);
  };
  const searchOnSubmit = (event) => {
    event.preventDefault();
    createBooks(inputVal);
  };

  return (
    <form
      onSubmit={searchOnSubmit}
      className=" flex flex-1  bg-purple-400 px-2.5 py-5"
    >
      <input
        className="flex-1 border rounded-lg text-lg px-3 py-0.5 ml-3"
        type="text"
        placeholder="Create a new book"
        onChange={getInputChange}
      />
      <Button wise rounded className="flex p-3 text-lg">
        <RiHeartAddFill />
        BookCreate
      </Button>
    </form>
  );
}

export default BookCreate;
