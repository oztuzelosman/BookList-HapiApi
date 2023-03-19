import axios from "axios";

const BookImage = async (term) => {
  const response = await axios.get(
    `https://hapi-books.p.rapidapi.com/search/${term}`,
    {
      headers: {
        "X-RapidAPI-Key": "3cfea6b6d0mshf6ca52fdc053499p1fdc62jsn987d31426fb5",
        "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
      },
    }
  );

  console.log(response.data);
  return response.data;
};
export default BookImage;
