import gig from "../assets/gif.gif";
import "../App.css";
import { FiSend } from "react-icons/fi";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_razhu2y", "template_1bk0ltn", form.current, {
        publicKey: "ERsmDMxzL_g2tU2SF",
      })
      .then(
        () => {
          toast.success("Your email has been sent sucessfully!");
          console.log("SUCCESS!");
        },
        (error) => {
          toast.error(error.text);
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className=" mt-16 w-full md:max-w-[80%] mx-auto" id="contact">
      <div className=" md:flex justify-between gap-3 border rounded-md p-4">
        <div className=" flex-1 p-5 space-y-2">
          <h2 className="text-3xl font-bold">Contact</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <input
                type="text"
                placeholder=" Please Enter Your Name"
                className=" inputins "
                name="user_name"
                required
              />
            </div>
            <br />
            <div>
              <input
                type="email"
                placeholder=" Please Enter Your Email"
                className=" inputins "
                name="user_email"
                required
              />
            </div>
            <br />
            <div>
              <input
                type="text"
                placeholder=" Please Enter Your Subject"
                className=" inputins "
                name="subject"
                required
              />
            </div>
            <br />
            <div>
              <textarea
                type="text"
                className="inputins "
                placeholder="Write Your Message Here"
                name="message"
                id=""
                required
              ></textarea>
            </div>
            <br />
            <button className=" btn btn-secondary bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 ">
              {" "}
              Send <FiSend />
            </button>
          </form>
        </div>
        <div className=" flex-1">
          <img className="w-full rounded-md" src={gig} alt="A cool GIF" />
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href="#nav"
          className="btn my-10   text-xl font-semibold btn-secondary bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
        >
          <FaRegArrowAltCircleUp />
        </a>
      </div>
    </div>
  );
};

export default Contact;
