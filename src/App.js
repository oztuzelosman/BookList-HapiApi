import BookImage from "./api";
import BookList from "./pages/BookList";
//
import { useState } from "react";
//
import BookCreate from "./pages/BookCreate";

function App() {
  const [bookArr, setBookArr] = useState([]);

  const createBooks = async (inputVal) => {
    const result = await BookImage(inputVal);
    setBookArr(result);
  };

  return (
    <div className="flex flex-col m-0 ">
      <BookCreate createBooks={createBooks} />
      <BookList bookArr={bookArr} />
    </div>
  );
}

export default App;
