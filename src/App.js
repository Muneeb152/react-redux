import { Fragment } from "react";
import logo from "./logo.svg";
import Counter from "./components/Counter";
import "./App.css";
import { UseSelector, useSelector } from "react-redux";
// import Header from './components/Header';
// import Auth from './components/Auth';
// import UserProfile from './components/UserProfile';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      {/* <Header />
      {!isAuthenticated && <Auth />}
      {isAuth && <UserProfile />} */}
      <Counter />
    </Fragment>
  );
}

export default App;
