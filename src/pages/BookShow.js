function BookShow({ bookObj }) {
  return (
    <div className=" flex flex-col flex-auto container border text-lg w-1/5 m-5 p-5 self-center items-center content-center">
      <img
        className="flex-1 w-max  m-2 "
        src={bookObj.cover}
        alt={bookObj.name}
      />

      <h3 className="p-2 m-2">{bookObj.name}</h3>
    </div>
  );
}

export default BookShow;
