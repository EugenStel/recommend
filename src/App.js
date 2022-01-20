import { BrowserRouter } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./Components/Header/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
// import { Provider } from 'react-redux'
// import { store } from './redux/store'


function App() {

  return (
    // <Provider store={store}>
    <BrowserRouter>
      <HeaderComponent />
      <FooterComponent />
    </BrowserRouter>
    // </Provider>

  );
}

export default App;
