import { BrowserRouter, Route, Routes } from "react-router-dom";
import {routes} from "./Routes/"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        {routes.map((route) => {
            return (
              <Route key={route.id} path={route.path} element={route.element} />
            );
          })}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
