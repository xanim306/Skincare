import React from "react";

import HeaderModal from "./HeaderModal";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Select } from "antd";
import { connect } from "react-redux";


function Header({dispatch,words,lang}) {
  const { Option } = Select;
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const [searchedProducts, setSearcedProducts] = useState({});
  const [menuOpen,setMenuOpen]=useState(false);
  useEffect(() => {
    console.log({ searchProduct });
    fetch(
      `http://127.0.0.1:8000/products/list/?name=${searchProduct}&price_range_min=&price_range_max=&status=&skintype=`
    )
      .then((a) => a.json())
      .then((a) => setSearcedProducts(a));
  }, [searchProduct]);
  const handleChange = (value) => {
    setSearchProduct(value);
  };
  const handleSearch = (searchValue) => {
    setSearchProduct(searchValue);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const changeLang = (lang) => {
    localStorage.setItem("language", lang);
    dispatch({
      type: "SET_LANG",
      payload: lang,
    });
    setMenuOpen(false);
  };
  console.log({ searchedProducts });
  // console.log({ searchProduct });
// --------------------------------------------------





 
  return (
    <header className="bg_white">
      <div className="container">
        <div className="header_inner">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="155"
              height="43"
              viewBox="0 0 155 43"
              fill="none"
            >
              <path
                d="M74.521 12.053V32.967H69.681V24.392H60.18V32.967H55.34V12.053H60.18V20.299H69.681V12.053H74.521Z"
                fill="black"
              />
              <path
                d="M95.106 16.893L87.846 33.953C86.292 37.837 84.081 39.002 81.183 39.002C79.539 39.002 77.748 38.464 76.703 37.538L78.406 34.222C79.122 34.849 80.108 35.238 81.034 35.238C82.319 35.238 83.036 34.671 83.663 33.237L83.724 33.088L76.762 16.893H81.572L86.083 27.798L90.625 16.893H95.106Z"
                fill="black"
              />
              <path
                d="M113.151 16.893V30.278C113.151 36.254 109.924 39.002 104.129 39.002C101.081 39.002 98.124 38.255 96.241 36.791L98.094 33.445C99.468 34.55 101.709 35.267 103.771 35.267C107.057 35.267 108.492 33.773 108.492 30.875V30.188C107.266 31.532 105.504 32.189 103.413 32.189C98.961 32.189 95.376 29.112 95.376 24.421C95.376 19.731 98.961 16.653 103.413 16.653C105.653 16.653 107.506 17.4 108.73 18.953V16.893H113.151ZM108.55 24.422C108.55 22.062 106.787 20.479 104.337 20.479C101.887 20.479 100.095 22.062 100.095 24.422C100.095 26.782 101.887 28.366 104.337 28.366C106.787 28.366 108.55 26.782 108.55 24.422Z"
                fill="black"
              />
              <path
                d="M134.064 16.893V30.278C134.064 36.254 130.837 39.002 125.042 39.002C121.994 39.002 119.037 38.255 117.154 36.791L119.007 33.445C120.381 34.55 122.622 35.267 124.684 35.267C127.97 35.267 129.405 33.773 129.405 30.875V30.188C128.179 31.532 126.417 32.189 124.326 32.189C119.874 32.189 116.289 29.112 116.289 24.421C116.289 19.731 119.874 16.653 124.326 16.653C126.566 16.653 128.419 17.4 129.643 18.953V16.893H134.064ZM129.463 24.422C129.463 22.062 127.7 20.479 125.25 20.479C122.8 20.479 121.008 22.062 121.008 24.422C121.008 26.782 122.8 28.366 125.25 28.366C127.701 28.366 129.463 26.782 129.463 24.422Z"
                fill="black"
              />
              <path
                d="M154.052 26.245H141.892C142.34 28.246 144.043 29.472 146.494 29.472C148.196 29.472 149.422 28.964 150.527 27.918L153.006 30.607C151.512 32.31 149.272 33.207 146.373 33.207C140.816 33.207 137.201 29.711 137.201 24.931C137.201 20.12 140.876 16.655 145.775 16.655C150.496 16.655 154.141 19.822 154.141 24.99C154.142 25.348 154.081 25.856 154.052 26.245ZM141.832 23.526H149.749C149.421 21.494 147.897 20.18 145.806 20.18C143.685 20.18 142.161 21.464 141.832 23.526Z"
                fill="black"
              />
              <path
                d="M42.88 21.44C42.88 9.599 33.281 0 21.44 0C9.599 0 0 9.599 0 21.44C0 26.826 2.001 31.735 5.28 35.501V19.897H12.698V29.848H21.579V19.897H28.997V41.484C37.104 38.425 42.88 30.617 42.88 21.44Z"
                fill="#00CC96"
              />
              <path
                d="M12.698 35.589V41.004C15.37 42.2 18.323 42.88 21.44 42.88C21.487 42.88 21.533 42.873 21.58 42.873V35.589H12.698Z"
                fill="#00CC96"
              />
              <path
                d="M21.58 19.897V29.848H12.699V19.897H5.28V35.501C7.313 37.835 9.836 39.723 12.698 41.004V35.589H21.579V42.873C24.192 42.856 26.685 42.356 28.997 41.484V19.897H21.58Z"
                fill="white"
              />
              <path
                d="M32.884 7.129C32.778 7.142 32.46 7.177 32.058 7.219C31.779 7.248 31.507 7.271 31.324 7.285C30.961 6.625 30.318 6.164 29.514 6.164C28.882 6.164 28.368 6.36 27.937 6.899C27.575 7.351 27.34 7.975 27.111 8.3C25.245 10.945 22.27 11.407 18.783 11.407C17.979 11.407 17.2 11.308 16.448 11.135C16.327 11.107 16.208 11.229 16.263 11.341C17.674 14.194 21.037 16.256 23.769 16.708V19.859H24.565V16.791C24.644 16.795 24.725 16.803 24.803 16.804C25.295 16.807 25.738 16.768 26.158 16.706V19.859H26.954V16.542C28.243 16.191 29.199 15.492 30.027 14.485C31.025 13.271 31.608 11.113 31.643 9.013C31.773 8.88 32.074 8.565 32.276 8.294C32.74 7.67 33.104 7.101 32.884 7.129ZM29.712 8.533C29.37 8.533 29.093 8.256 29.093 7.914C29.093 7.572 29.37 7.295 29.712 7.295C30.054 7.295 30.331 7.572 30.331 7.914C30.331 8.256 30.054 8.533 29.712 8.533Z"
                fill="white"
              />
            </svg>
          </div>

          <div onClick={() => setOpen(!open)} className="modal_toggler">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle cx="24" cy="24" r="24" fill="#F6F7FB" />
            </svg>

            {open ? (
              <svg
                className="toggler_iconx"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M1 1L15 15"
                  stroke="black"
                  stroke-width="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 15L15 1"
                  stroke="black"
                  stroke-width="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="toggler_icon"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="10"
                viewBox="0 0 22 10"
                fill="none"
              >
                <path
                  d="M1 1H21"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 9H21"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <div className="icons">
            {search && (
              <Select
                showSearch
                allowClear
                style={{ width: 200 }}
                placeholder="Type to search"
                optionFilterProp="children"
                onChange={handleChange}
                onSearch={handleSearch}
                open={searchProduct?.length >= 2}
                // options={searchedProducts?.results?.map((a) => {
                //   return { label: a.name, value: a.name };
                // })}
                filterOption={(input, option) => {
                  const linkText = option?.value;

                  return linkText.toLowerCase().includes(input.toLowerCase());
                }}
              >
                {searchedProducts?.results?.map((product) => (
                  <Option key={product.id} value={product.name}>
                    <Link to={`/${product.id}/product`}>{product.name}</Link>
                  </Option>
                ))}
              </Select>
            )}
            <div style={{ position: "relative" }}>
              {/* <button className="language-button" onClick={toggleMenu}>
                <img
                  style={{ width: 50 }}
                  src={
                    lang === "az"
                      ? "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Azerbaijan_%281991%E2%80%932013%29.svg"
                      : "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png"
                  }
                  alt=""
                />
              </button> */}
              {menuOpen && (
                <div className="dropdown1">
                  {/* {lang === "az" ? (
                    <button
                      className="language-button"
                      style={{ color: lang === "en" ? "red" : "#000" }}
                      onClick={() => changeLang("en")}
                    >
                      <img
                        style={{ width: 50 }}
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png"
                        alt=""
                      />
                    </button>
                  ) : (
                    <>
                      <button
                        className="language-button"
                        style={{ color: lang === "az" ? "red" : "#000" }}
                        onClick={() => changeLang("az")}
                      >
                        <img
                          style={{ width: 50 }}
                          src="https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Azerbaijan_%281991%E2%80%932013%29.svg"
                          alt=""
                        />
                      </button>
                    </>
                  )} */}
                </div>
              )}
            </div>
            <div className="seach_icon">
              <svg
                onClick={() => setSearch(!search)}
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M9.88891 18.7778C14.7981 18.7778 18.7778 14.7981 18.7778 9.88888C18.7778 4.97967 14.7981 0.999969 9.88891 0.999969C4.9797 0.999969 1 4.97967 1 9.88888C1 14.7981 4.9797 18.7778 9.88891 18.7778Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.9998 21L16.1665 16.1666"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <Link to="/shoppingcard" className="basket_icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
              >
                <path
                  d="M8.27262 20C8.77469 20 9.18171 19.5949 9.18171 19.0952C9.18171 18.5956 8.77469 18.1905 8.27262 18.1905C7.77054 18.1905 7.36353 18.5956 7.36353 19.0952C7.36353 19.5949 7.77054 20 8.27262 20Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.2726 20C18.7747 20 19.1817 19.5949 19.1817 19.0952C19.1817 18.5956 18.7747 18.1905 18.2726 18.1905C17.7705 18.1905 17.3635 18.5956 17.3635 19.0952C17.3635 19.5949 17.7705 20 18.2726 20Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1H4.63636L7.07273 13.1148C7.15586 13.5313 7.38355 13.9055 7.71595 14.1718C8.04835 14.4381 8.46427 14.5796 8.89091 14.5714H17.7273C18.1539 14.5796 18.5698 14.4381 18.9022 14.1718C19.2346 13.9055 19.4623 13.5313 19.5455 13.1148L21 5.52381H5.54545"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="basket_circle"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                  fill="#FF66A0"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </Link>
            <div className="user_icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M19 20V18C19 16.9391 18.5259 15.9217 17.682 15.1716C16.8381 14.4214 15.6935 14 14.5 14H5.5C4.30653 14 3.16193 14.4214 2.31802 15.1716C1.47411 15.9217 1 16.9391 1 18V20"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10C12.4853 10 14.5 7.98528 14.5 5.5C14.5 3.01472 12.4853 1 10 1C7.51472 1 5.5 3.01472 5.5 5.5C5.5 7.98528 7.51472 10 10 10Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {open && <HeaderModal setOpen={setOpen} open={open} />}
        </div>
      </div>
    </header>
  );
}
const t=(a)=>a;
export default connect(t) (Header);
