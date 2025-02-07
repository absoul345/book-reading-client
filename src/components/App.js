import { createContext, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import usePersistedTheme from "../hooks/usePersistedTheme";
import Header from "./header/Header";
import Main from "./main/Main";
import Spinner from "./Spinner/Spinner";
import { getToken } from "../redux/auth/authSelectors";
import { setUserToken } from "../redux/auth/authActions";
import { parse } from "query-string";
import { useEffect } from "react";
import { getCurrentUser } from "../redux/auth/authOperations";

export const ThemeContext = createContext();

function App() {
  const [theme, changeTheme] = usePersistedTheme();
  const dispatch = useDispatch();
  const { search } = useLocation();
  const token = useSelector(getToken);

  useEffect(() => {
    if (search) {
      const token = parse(search);
      dispatch(setUserToken(token));
    }
  }, [search, dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, token]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Main />
      </Suspense>
    </ThemeContext.Provider>
  );
}

export default App;
