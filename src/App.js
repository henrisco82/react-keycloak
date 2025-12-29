import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Hidden from "./pages/Hidden";
import Error from "./pages/Error";
import PrivateRoute from "./helpers/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
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
