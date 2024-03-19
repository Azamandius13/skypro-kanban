import "./App.css";
import { GlobalStyle } from "./Global.styled";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./lib/approutes";
import CardPage from "./Pages/CardPage";
import MainPage from "./Pages/MainPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import NotFoundPage from "./Pages/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  let user = true;

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<PrivateRoute user={user} />}>
          <Route path={appRoutes.MAIN} element={<MainPage />}>
              <Route path={`${appRoutes.CARD}/:cardId`} element={<CardPage/>}/>
          </Route>
        </Route>
        <Route path={appRoutes.LOGIN} element={<LoginPage />}/>
        <Route path={appRoutes.REGISTER} element={<RegisterPage />}/>
        <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />}/>
      </Routes>
    </>
  );
}

export default App;
