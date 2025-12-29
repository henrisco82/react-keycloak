import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import Hidden from "./Hidden.jsx";
import Register from "./pages/Register.jsx";
import Error from "./Error.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
          <Route path="/hidden" element={
                 <PrivateRoute>
                   <Hidden />
                 </PrivateRoute>
               } />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
