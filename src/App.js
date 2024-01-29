import { Fragment } from "react";
import logo from "./logo.svg";
import Counter from "./components/Counter";
import "./App.css";
import { useSelector, Provider } from "react-redux";
import store from "./store";
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
      <Provider store={store}>
        <Counter />
      </Provider>
    </Fragment>
  );
}

export default App;
