import React from "react";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";

const Header = () => {
  
  return (
    <>
      <section className={classes.fixed}>
        <section>
          <div className={classes.header__container}>
            {/* logo section */}
            <div className={classes.logo__container}>
              <Link to="/">
                <img
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="amazon logo"
                />
              </Link>
              <div className={classes.delivery}>
                <span>
                  <SlLocationPin />
                </span>
              </div>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
            {/* search section */}
            <div className={classes.search}>
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" name="" id="" placeholder="search product" />
              <BsSearch size={25} />
            </div>
            {/* right side link */}

            <div className={classes.order__container}>
              <Link to="/" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                  alt=""
                />
                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </Link>

              {/* three components */}
              <Link to="/">
                <div>
                  <p>Hello, Sign In</p>
                  <span>Account & Lists</span>
                </div>
              </Link>
              {/* orders */}
              <Link to="/orders">
                <p>returns</p>
                <span>& Orders</span>
              </Link>
              {/* cart */}
              <Link to="/cart" className={classes.cart}>
                <BiCart size={35} />
                <span>0</span>
              </Link>
            </div>
          </div>
        </section>
        {/* <LowerHeader /> */}
        <LowerHeader/>
      </section>
    </>
  );
};

export default Header;
