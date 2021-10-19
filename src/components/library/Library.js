import React, { useEffect } from "react";
import { LibraryStyled } from "./LibraryStyled";
import BooksList from "./booksList/BooksList";
import LibraryEmpty from "../libraryEmpty/LibraryEmpty";
import AddBookModal from "../addBookModal/AddBookModal";
import { getAllBooksOperation } from "../../redux/books/booksOperations";
import { useDispatch, useSelector } from "react-redux";
import { getAuthenticated } from "../../redux/auth/authSelectors";
import { NavLink } from "react-router-dom";

const Library = () => {
  const isAuth = useSelector(getAuthenticated)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooksOperation());
  }, [dispatch]);

  return (
    <LibraryStyled>
      {isAuth && (
        <>
        <LibraryEmpty />
        <AddBookModal />
        <BooksList />
        </>
      )}       
      <NavLink to="/training" className="trainingLink">
        Далі
      </NavLink>
    </LibraryStyled>
  );
};

export default Library;
