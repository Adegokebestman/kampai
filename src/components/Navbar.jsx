import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Link } from "react-router-dom";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile, Settings } from ".";
import { useStateContext } from "../contexts/ContextProvider";
import kampai from '../data/kampai.svg';
import notification from '../data/notification.svg';
 import cart from '../data/cart.svg';
 import settings from '../data/settings.svg';
import { Order } from "../pages";



const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className=" flex mt-2 justify-around p-2 md:ml-6 md:mr-6 ">

      <div className="">
      <img className="" src={kampai} alt={kampai} />
</div>
<form className="max-w-sm mr-14 ml-14 px-4 ">
        <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-[#EBAF8D] left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
          <input
            type="text"
            placeholder="Search"
            className=" py-3 pl-12 pr-40 text-black border border-[#AF501A] rounded-md outline-[#AF501A] bg-white-50 focus:bg-white focus:border-indigo-600"
          />
        </div>
      </form>
    <NavButton className="inline-block pr-8 pl-8"
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

        <NavButton className="inline-block"
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<img src={notification} alt={notification} />}
        />
        {/* reworked on the Cart btn */}
        <Link to='./Order' className="inline-block mt-2"
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}> <img src={cart} alt={cart} /> </Link>

<Link to='./MySettings' className="inline-block mt-2"
          title="Settings"
          customFunc={() => handleClick("cart")}
          color={currentColor}> <img src={settings} alt={settings} /> </Link>

        {/* <NavButton className="inline-block"
          title="Settings"
          dotColor="#03C9D7"
          customFunc={() => handleClick("setting")}
          color={currentColor}
          icon={<img src={settings} alt={settings} />}
        /> */}
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 p-1 hover:bg-light-gray rounded-lg"
            // onClick={() => handleClick("userProfile")}
          >
            <img
              className="rounded-full w-12 h-12"
              src={avatar}
              alt="user-profile"
            />
            {/* <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Jannet
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" /> */}
          </div>
        </TooltipComponent>
        {isClicked.notification && <Notification />}
        {isClicked.setting && <Settings />}
      </div>


  );
};

export default Navbar;
