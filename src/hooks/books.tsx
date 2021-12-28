import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import api from "../services/api";

//Criação do context
const BooksContext = createContext({});

interface BooksPrividerProps {
  children: ReactNode;
}

function BooksProvider({ children }: BooksPrividerProps) {
  const [bookList, setbookList] = useState([]);
  const [error, setError] = React.useState<string>("");

  useEffect(() => {
    const TestBooks = async () => {
      const response = await api.get(
        "/svc/books/v3/lists/overview.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR"
      );
    
      try {
         response.data.results.lists[0].books;

        setbookList(response.data.results.lists[0].books);
      } catch (err) {
        let errorMessage = "Não foi possivel exibir livros";
        if (err?.response?.data?.message) {
          //erro retornado do Back
          errorMessage = err?.response?.data?.message;
        }
        setError(errorMessage);
      }
    };
    TestBooks();
  }, []);

  // console.log()

  return( 
  <BooksContext.Provider value={bookList}>
    {children}
  </BooksContext.Provider>
  )
}


function useBooks() {
  const context = useContext(BooksContext);
  return context;
}

export { BooksProvider, useBooks};
