import { useEffect, useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import InputWithDropdown from "./InputWithDropdown";
import { Button } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import "./All.css";

export default function Filter() {
  const allprice = [
    "0-400",
    "400-600",
    "600-800",
    "800-1000",
    "1000-1200",
    "1400-1600",
    "1600-100000",
  ];

  // const [searchParams, setSearchParams] = useSearchParams();
  // const initialPrice = searchParams.getAll("price");
  // const [price, setPrice] = useState(initialPrice || []);

  // const handleFilter = (e) => {
  //   let newPrice= [...price];
  //   const value = e.target.value;
  //   if (newPrice.includes(value)) {
  //     newPrice = newPrice.filter((el) => el !== value);
  //   } else {
  //     newPrice.push(value);
  //   }
  //   setPrice(newPrice);
  // };

  // useEffect(() => {
  //   let params = {};
  //   price && (params.price = price);
  //   console.log(params);
  //   setSearchParams(params);
  // }, [price]);

  const [searchParams, setSearchParams] = useSearchParams();
  const initialPrice = searchParams.getAll("price");
  const [price, setPrice] = useState(initialPrice || []);

  const handleFilter = (e) => {
    // const value = e.target.value;
    // console.log(value)
    // let arr = value.trim().split(" ").map(Number)
    // if (price.includes(value)) {
    //   let filteredData= price.filter((el)=> el>=arr[0] && el<=arr[1] )
    // } else {
    //   setPrice([...price, value]);
    // }
    let newPrice = [...price];
    const value = e.target.value;
    if (newPrice.includes(value)) {
      newPrice = newPrice.filter((el) => el !== value);
    } else {
      newPrice.push(value);
    }
    setPrice(newPrice);
  };

  useEffect(() => {
    // Update the URL search parameters when the price state changes
    // searchParams.delete("price"); // Clear existing "price" parameters
    // price.forEach((value) => {
    //   searchParams.append("price", value); // Add each selected value as a parameter
    // });
    // setSearchParams(searchParams.toString());
    let params = {};
    price && (params.price = price);
    // designer && (params.designer = designer);
    // console.log(params);
    setSearchParams(params);
  }, [price]);

  return (
    <>
      <div className="Filter">
        <div className="filter-head">
          <div className="filter-headtext">Study Area*</div>
        </div>

        <div className="Filterdetail">
          <InputWithDropdown />
        </div>

        <div id="sort_con">
          <Button className="sbutton">₹Low To High ⬆️</Button>
          <Button className="sbutton">₹High To Low ⬇️</Button>
        </div>

        {/* <div className="filter-mode">Mode</div>
<label class="container">Online Tution
  <input type="checkbox" checked="checked"/>
  <span class="checkmark"></span>
</label>
<label class="container">Offline Tution
  <input type="checkbox" />
  <span class="checkmark"></span>
</label> */}

        {/* <Button className="applybtn" backgroundColor={"blue.700"} color={"white"}>Apply</Button> */}

        <div className="price-border">
          <div className="price-head">
            <div>PRICE / hour</div>
            <SearchIcon />
          </div>
          {allprice?.map((el, ind) => (
            <div key={el} className="price-items">
              <input
                type="checkbox"
                value={el}
                name="price"
                checked={price.includes(el)}
                onChange={(e) => handleFilter(e)}
              />
              <div>
                {ind === allprice.length - 1
                  ? `${el.substring(0, 4)}-above`
                  : `₹${el}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
