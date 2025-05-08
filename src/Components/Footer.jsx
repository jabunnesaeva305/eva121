import { Link } from "react-router-dom";
import { FaFacebookF, FaSquareXTwitter } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { FaSquareInstagram } from "react-icons/fa6";
import "../App.css";
const Footer = () => {
  return (
    <div className=" mt-10 bg-black/55 p-8">
      <div className=" flex gap-5 my-10 justify-center text-3xl">
        <Link to="https://www.facebook.com/jabunnesa.eva">
          <FaFacebookF className=" contact-icon text-[#1877F2]" />
        </Link>
        <Link to="https://www.linkedin.com/in/jabunnesa-eva">
                      <GrLinkedin className="contact-icon text-[#0077B5]" />
                    </Link>
        <Link to="https://www.instagram.com/jabunnesaeva5">
          <FaSquareInstagram className="contact-icon text-[#962fbf]" />
        </Link>
        {/* <Link to="https://x.com/Majhar008">
                      <FaSquareXTwitter className="contact-icon text-[#000000]" />
        
                    </Link> */}
      </div>
      <p className=" text-center">
        Copyright © ${new Date().getFullYear()} - All rights are reserved by{" "}
        <span className=" text-rose-400">Jabunnesa Eva.</span>
      </p>
    </div>
  );
};

export default Footer;
