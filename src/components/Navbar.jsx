import logo from "../assets/logo.svg";
import { MdLanguage } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex pt-14 px-8 py-4 justify-end text-center">
      <div className="w-1/2 self-center">
        <img
          className="object-scale-down h-4 justify-start"
          src={logo}
          alt=""
        />
      </div>
      <div className="flex text-center w-1/2 justify-end gap-1">
        <div className="self-center">
          <MdLanguage />
        </div>
        <p>US</p>
      </div>
    </div>
  );
};

export default Navbar;
