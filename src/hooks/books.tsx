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
  const [bookList1, setbookList1] = useState();
  const [bookList2, setbookList2] = useState();
  const [error, setError] = React.useState<string>("");

  useEffect(() => {
    const TestBooks = async () => {
      const response = await api.get(
        "/svc/books/v3/lists/overview.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR"
      );
    
      try {
         response.data.results.lists;
         const  books1  = response.data.results.lists[0].books
         const  books2 = response.data.results.lists[1].books

        setbookList1(books1);
        setbookList2(books2);
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

   console.log(bookList2)

  return( 
  <BooksContext.Provider value={[bookList1, bookList2]}>
    {children}
  </BooksContext.Provider>
  )
}


function useBooks() {
  const context = useContext(BooksContext);
  return context;
}

export { BooksProvider, useBooks};
