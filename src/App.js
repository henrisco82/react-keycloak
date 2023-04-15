import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Hidden from "./pages/Hidden";
import Error from "./pages/Error";
import PrivateRoute from "./helpers/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/hidden" element={
               <PrivateRoute>
                 <Hidden />
               </PrivateRoute>
             } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
