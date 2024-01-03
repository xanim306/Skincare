import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("./pages/Home"));
const Category = lazy(() => import("./pages/Category"));
const Blog = lazy(() => import("./pages/Blog"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Careers = lazy(() => import("./pages/Careers"));
const Products = lazy(() => import("./pages/Products"));
const Product = lazy(() => import("./pages/Product"));
const Category2 = lazy(() => import("./pages/Category2"));

import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { connect } from "react-redux";

function App({ dispatch, products, API_PRODUCTS }) {
  useEffect(() => {
    fetch("http://127.0.0.1:8000/products/categories/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((a) => a.json())
      .then((a) => {
        dispatch({
          type: "SET_CATEGORY",
          payload: a,
        });
      })
      .then(() => {
        fetch(API_PRODUCTS, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        })
          .then((a) => a.json())
          .then((a) => {
            dispatch({
              type: "SET_PRODUCTS",
              payload: a,
            });
          });
      });

    // .then(() => {
    //   fetch("http://localhost:1313/blog")
    //     .then((a) => a.json())
    //     .then((a) =>
    //       dispatch({
    //         type: "SET_BLOG",
    //         payload: a,
    //       })
    //     );
    // });
  }, []);
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:id/category",
      element: <Category2 />,
    },
    {
      path: "/products",
      element: <Products />,
    },

    {
      path: "/:id/product",
      element: <Product />,
    },
    // {
    //   path: "/:id/blog",
    //   element: <Blog />,
    // },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/careers",
      element: <Careers />,
    },
  ];
  return (
    <>
      <Header />
      <Routes>
        {routes.map((a) => (
          <Route
            key={a.path}
            path={a.path}
            element={
              <Suspense fallback={<h1>Loading...</h1>}>{a.element}</Suspense>
            }
          />
        ))}
      </Routes>
      <Footer />
    </>
  );
}
const t = (a) => a;
export default connect(t)(App);
