import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";

const Education = () => {
  return (
    <div className="mt-10" id="edu">
      <h1 className="text-4xl md:text-5xl text-center my-3 font-bold">
        Education
      </h1>
      <VerticalTimeline lineColor="white" className="text-black">
        <VerticalTimelineElement
          className="vertical-timeline-element--education "
          date="2022 - stady"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "white" }}
          icon={<FaGraduationCap />}
        >
          <div>
            <h3 className=" text-2xl font-bold">Bachelor of Science</h3>
            <h4 className="">Computer Science and Engineering </h4>
            <p>
              <b>Result in CGPA : 3.78</b>
              <br />I am currently studying in my fourth year at North Western
              University.
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2017"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBuildingColumns />}
        >
          <h3 className=" text-2xl font-bold">Higher Secondary</h3>
          <h4 className="vertical-timeline-element-subtitle">
            From the science group
          </h4>
          <p>
            <b>Result in GPA : A+</b>
            <br /> I have passed HSC exam from Govt. Bangabandhu College, Khulna.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2015"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold">
            Secondary
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            From the science group
          </h4>
          <p>
            {" "}
            <b>Result in GPA : A+</b>
            <br />I have passed SSC exam from J.K.S Girls High School, Khulna.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
