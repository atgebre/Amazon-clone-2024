import React from "react";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";

const Header = () => {
  
  return (
    <>
      <section className={classes.fixed}>
        <section>
          <div className={classes.header__container}>
            {/* logo section */}
            <div className={classes.logo__container}>
              <a href="/">
                <img
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="amazon logo"
                />
              </a>
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
              <a href="/" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                  alt=""
                />
                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </a>

              {/* three components */}
              <a href="/">
                <div>
                  <p>Hello, Sign In</p>
                  <span>Account & Lists</span>
                </div>
              </a>
              {/* orders */}
              <a href="/">
                <p>returns</p>
                <span>& Orders</span>
              </a>
              {/* cart */}
              <a href="/cart" className={classes.cart}>
                <BiCart size={35} />
                <span>0</span>
              </a>
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
