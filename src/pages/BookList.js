import BookShow from "./BookShow";

function BookList({ bookArr }) {
  return (
    <div className="flex flex-row flex-wrap border-4 border-red-700 m-5">
      {bookArr.map((bookObj) => {
        return <BookShow key={bookObj.id} bookObj={bookObj} />;
      })}
    </div>
  );
}

export default BookList;
