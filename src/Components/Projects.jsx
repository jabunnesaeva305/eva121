import img1 from "../assets/img3.jpg";
import img3 from "../assets/sss.jpg";
import img2 from "../assets/s.jpg";
import img4 from "../assets/cute.jpg";
// import { Link } from "react-router-dom";
// import { FaGithub } from "react-icons/fa";
// import { FaRegEye } from "react-icons/fa";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const project = [
  {
    id: 1,
    title: "Hotel Management system using Python ",
    des: "A Hotel Management System is a software application designed to streamline and automate the various administrative tasks associated with managing student accommodations.",
    img: img1,
    View: "https://sms-clint.web.app/",
    codeview: "https://github.com/rezwanhossen/sms-clint",
    tecnolo: [
      "Python",
      "DB Browser",
    ],
  },
  {
    id: 2,
    title: "Skin Disease Detection using Machine Learning",
    des: "This project leverages machine learning techniques to accurately classify various skin diseases from clinical images. By employing deep learning models such as Convolutional Neural Networks (CNNs), the system analyzes features like texture, color, and shape to detect conditions ranging from benign lesions to malignant melanomas.",
    img: img2,
    view: "https://doctoe-servics.web.app/",
    codeview: "https://github.com/rezwanhossen/doctor-servic-",
    tecnolo: [
      "Python",
      "KNN",
      "Data Set",

    ],
  },
  {
    id: 3,
    title: "Snake Game 2D for Android using Java & Android Studio ",
    des: "This project involves developing a classic 2D Snake game for Android devices using Java and Android Studio. The game features intuitive touch controls, a dynamic game board, and a scoring system.",
    img: img3,
    view: "https://turesom-assigment10.web.app/",
    codeview: "https://github.com/rezwanhossen/-Travel-Tour-clint",
    tecnolo: ["Java", "Android Studio"],
  },
  {
    id: 4,
    title: "Voice-Controlled Robot using Arduino Uno",
    des: "This project involves developing a voice-controlled robot using Arduino Uno, enabling hands-free operation through voice commands. By integrating a Bluetooth module (such as HC-05) and a smartphone application, users can issue commands like 'move forward' 'turn left' or 'stop' which are transmitted to the Arduino. The Arduino processes these commands and controls the robot's movements accordingly. This project serves as an excellent introduction to robotics, combining elements of voice recognition, wireless communication, and embedded systems.",
    img: img4,
    view: "https://turesom-assigment10.web.app/",
    codeview: "https://github.com/rezwanhossen/-Travel-Tour-clint",
    tecnolo: ["C", "Arduino Uno", "Sensor"],
  },
];
const Projects = () => {
  return (
    <div className=" mt-10" id="project">
      <h1 className="text-3xl md:text-5xl font-bold text-center my-5">
        Projects{" "}
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {project.map((pro) => (
          <div key={pro?.id}>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className=" space-y-2 border-2 rounded-lg p-5"
            >
              <div className="">
                <img className=" w-full h-[200px]" src={pro?.img} alt="" />
                {/* <div className="absolute top-1 inset-0 flex justify-center items-center"> */}
                {/* <div className="flex justify-center items-center gap-5 text-3xl">
                  <Link
                    to={pro.codeview}
                    className="icon tooltip "
                    data-tip="Code in github"
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    to={pro.view}
                    className="icon tooltip "
                    data-tip="View Project"
                  >
                    <FaRegEye />
                  </Link>
                </div> */}
                {/* </div> */}
              </div>

              <h2 className="text-2xl font-bold">{pro?.title}</h2>
              <p>{pro?.des.slice(0, 100)}...</p>
              <div className="grid grid-cols-3 gap-2 ">
                {pro?.tecnolo.map((tec, inx) => (
                  <p
                    key={inx}
                    className=" bg-slate-600 text-[14px] text-center  rounded-md"
                  >
                    {tec}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
