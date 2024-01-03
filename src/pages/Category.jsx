import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Newsletter from "../components/Newsletter";
import Select from "react-select";

import { useState, useEffect } from "react";
import axios from "axios";

function Category({ products, API_IMAGE, API_PRODUCTS }) {
  const { id } = useParams();
  const filteredProducts = products?.results?.filter(
    (p) => p.category?.id === +id
  );
  const catName = filteredProducts?.map((f) => f.category?.name);

  // -----------------------STATUS FILTER---------------------------------------

  // const [selectedStatus, setSelectedStatus] = useState("All");
  // const [FilteredProducts, setFilteredProducts] = useState([]);
  // const catNames = filteredProducts?.map((f) => f.category?.name);

  // const firstCategory = catNames && catNames.length > 0 ? catNames[0] : "";
  // console.log(firstCategory);
  // const categoryFilterUrl = firstCategory ? `${firstCategory}/` : "";

  // useEffect(() => {
    //   //   // Fetch filtered products from the API based on the selectedStatus
    //     let url = '${API_PRODUCTS}status/${selectedStatus}/';

    //     if (id) {
    //       url += catName;
    //     }

    //   //   // Append the selectedStatus as a query parameter
    //   if (selectedStatus === 'All') {
    //     setFilteredProducts([]); // Clear the filtered products
    //     return;
    //   }

  //   fetch(`http://127.0.0.1:8000/products/list/status/${selectedStatus}/`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log({ data });
  //       setFilteredProducts(data);
  //     })
  //     .catch((error) =>
  //       console.error("Error fetching filtered products:", error)
  //     );
  // }, [selectedStatus]);

  // const handleStatusChange = (event) => {
  //   setSelectedStatus(event.target.value);
  // };

  // useEffect(() => {

  //   let statusFilterUrl = '';
  //   if (selectedStatus !== 'All') {
  //     statusFilterUrl = `status/${selectedStatus}/`;
  //   }
  //   const apiUrl = `http://127.0.0.1:8000/products/list/${statusFilterUrl}`;

  //   // const apiUrl = `http://127.0.0.1:8000/products/list/?name=&price_range_min=&price_range_max=&$status={statusFilterUrl}&skintype=`;
  //   fetch(apiUrl)
  //   .then(response => response.json())
  //   .then(data => setFilteredProducts(data))
  //   .catch(error => console.error('Filtrelenmiş ürünleri getirme hatası:', error));
  // }, [selectedStatus, filteredProducts]);

  // const handleStatusChange = (event) => {
  //   setSelectedStatus(event.target.value);
  // };

  // const [minPrice, setMinPrice] = useState('');
  // const [maxPrice, setMaxPrice] = useState('');
  // // const [filtereddProducts, setFiltereddProducts] = useState([]);
  // const filterProducts = async (minPrice, maxPrice) => {
  //   try {
  //     const response = await axios.get(API_PRODUCTS, {
  //       params: {
  //         minPrice,
  //         maxPrice,
  //         // Add other filter parameters as needed
  //       },
  //     });
  //     // Handle the response, which should include the filtered products
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error('Error fetching filtered products:', error);
  //   }
  // };

  // console.log(products);

  // const handleFilter = async () => {
  //   try {
  //     const response = await axios.get(API_PRODUCTS, {
  //       params: {
  //         minPrice,
  //         maxPrice,
  //       },
  //     });
  //     setFiltereddProducts(response.data);
  //   } catch (error) {
  //     console.error('Error filtering products:', error);
  //   }

  // };

  // -------FIRST OPTIONS--------
  // const colorOptions = [
  //   { value: "Color", label: "Color" },
  //   { value: "Red", label: "Red" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];
  // const colorStyles = {
  //   control: (provided) => ({
  //     ...provided,
  //     border: "2px solid #f6f7fb",
  //     borderRadius: "32px",
  //     width: "144px",
  //     height: `64px`,
  //     paddingTop: `16px`,
  //     paddingLeft: `24px`,
  //     paddingBottom: `16px`,
  //     paddingRight: `24px`,
  //   }),
  // };

  // ---------SECOND OPTIONS-----------
  // const useOptions = [
  //   { value: "Use Case", label: "Use Case" },
  //   { value: "A", label: "A" },
  //   { value: "B", label: "B" },
  // ];
  // const useStyles = {
  //   control: (provided) => ({
  //     ...provided,
  //     border: "2px solid #f6f7fb",
  //     borderRadius: "32px",
  //     width: "183px",
  //     height: `64px`,
  //     paddingTop: `16px`,
  //     paddingLeft: `24px`,
  //     paddingBottom: `16px`,
  //     paddingRight: `24px`,
  //   }),
  // };

  // ------------THIRD OPTIONS-------------
  // const priceOptions = [
  //   { value: "Price Range", label: "Price Range" },
  //   { value: "A", label: "A" },
  //   { value: "B", label: "B" },
  // ];
  // const priceStyles = {
  //   control: (provided) => ({
  //     ...provided,
  //     border: "2px solid #f6f7fb",
  //     borderRadius: "32px",
  //     width: "215px",
  //     height: `64px`,
  //     paddingTop: `16px`,
  //     paddingLeft: `24px`,
  //     paddingBottom: `16px`,
  //     paddingRight: `24px`,
  //   }),
  // };

  // --------------------------FOURTH-----------
  // const sortOptions = [
  //   { value: "Sort By", label: "Sort By" },
  //   { value: "A", label: "A" },
  //   { value: "B", label: "B" },
  // ];
  // const sortStyles = {
  //   control: (provided) => ({
  //     ...provided,
  //     border: "2px solid #f6f7fb",
  //     borderRadius: "32px",
  //     width: "165px",
  //     height: `64px`,
  //     paddingTop: `16px`,
  //     paddingLeft: `24px`,
  //     paddingBottom: `16px`,
  //     paddingRight: `24px`,
  //   }),
  // };

  return (
    <>
      {/* <div> */}
        {/* Status filter dropdown */}
        {/* <label>Status Filter: </label>
        <select value={selectedStatus} onChange={handleStatusChange}>
          <option value="All">All</option>
          <option value="NEW IN">NEW IN</option>
          <option value="LOW STOCK">LOW STOCK</option>
        </select> */}

        {/* Display filtered products */}
        {/* <ul>
          {FilteredProducts?.map((product) => (
            <li key={product.id}>
              {product.name} - {product.status}
            </li>
          ))}
        </ul> */}
      {/* </div> */}

      <section className="filtered_products">
        {/* <div>
      <div>
        <label>Min Price:</label>
        <input type="number" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
      </div>
      <div>
        <label>Max Price:</label>
        <input type="number" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
      </div> */}
        {/* <button onClick={handleFilter}>Filter</button> */}

        {/* <ul>
        {filtereddProducts.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul> */}

        {/* </div> */}

        <div className="container">
          <span>
            Home <i className="fa-solid fa-chevron-right"></i>Navigation{" "}
            <i className="fa-solid fa-chevron-right"></i>{" "}
            {filteredProducts?.[0]?.category?.name}
          </span>

          <p className="subtitle">
            {" "}
            {`${filteredProducts?.[0]?.category?.name} Products`}
          </p>
          <p className="title">{`Explore the ${filteredProducts?.[0]?.category?.name} Products`}</p>

          {/* <div className="select-options"> */}
            {/* <div className="select-options-left"> */}
              {/* -----FIRST SELECT-------------- */}

              {/* <div className="singleSelect">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={colorOptions[0]}
                  name="color"
                  options={colorOptions}
                  styles={colorStyles}
                />
              </div> */}

              {/* -----SECOND----- */}
              {/* <div className="singleSelect">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={useOptions[0]}
                  name="useCase"
                  options={useOptions}
                  styles={useStyles}
                />
              </div> */}

              {/* ----------THIRD----------
               */}
              {/* <div className="singleSelect">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={priceOptions[0]}
                  name="useCase"
                  options={priceOptions}
                  styles={priceStyles}
                />
              </div> */}
            {/* </div> */}
            {/* -------------FOURTH--------------------------------- */}
            {/* <div className="singleSelect">
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={sortOptions[0]}
                name="useCase"
                options={sortOptions}
                styles={sortStyles}
              />
            </div> */}
          {/* </div> */}
          <div className="filtered_wrapper">
            {filteredProducts?.map((a, b) => {
              return (
                <div className="product" key={b}>
                  {a.discount_percent ? (
                    <button className="discount_percent">{`${a.discount_percent}% OFF`}</button>
                  ) : null}
                  <div className="image">
                    <img src={`${API_IMAGE}/${a.images.image}`} alt="" />
                  </div>
                  <div className="titles">
                    <p>{a.name}</p>
                    <div className="title">
                      <p>{a.category.name}</p>

                      {a.price !== a.total_price ? (
                        <p className="oldprice">${a.price}</p>
                      ) : null}
                      <p className="newprice">${a.total_price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
const t = (a) => a;
export default connect(t)(Category);
