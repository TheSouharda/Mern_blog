import "./App.css";
import Post from "./Post";

//? Importing React router elements
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./Pages/IndexPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

//? Replacing older React router elements into new one

const router = createBrowserRouter(
  createRoutesFromElements(
    //? creating nested route
    <Route path="/" element={<Layout />}>
      <Route index element={<IndexPage />} />
      <Route path={"/login"} element={<LoginPage></LoginPage>} />
      <Route path={"/register"} element={<RegisterPage></RegisterPage>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
