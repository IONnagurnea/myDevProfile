import Bar from "../components/Bar";
import { languages, tools } from "../data";
import {  SiCodecademy } from "react-icons/si";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Full-Stack Engineer
            </h5>
            <p className="flex items-center justify-start gap-1 font-semibold">
              <SiCodecademy className="w-6 h-6 text-dark"/>
              <span>Codecademy(2021-2022)</span>
            </p>
            <p className="my-3">
              Designing and building SPAs with PERN and MERN Stacks.
            </p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              BSc (Hons) Finance, Investment and Risk
            </h5>
            <p className="flex items-center justify-start gap-1 font-semibold">
              <span>The London Institute of Banking and Finance (2017-2020)</span>
            </p>
            <p className="my-3">
              Degree achieved 2:1.
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Web developer</h5>
            <p className="font-semibold">PetLove</p>
            <p className="my-3">My personal website</p>
          </div>
          <div className="py-4">
            <h5 className="my-2 text-xl font-bold">Financial Accountant <br/> <span className="font-normal">(January 2020-present)</span></h5>
            <p className="font-semibold">Self-employed</p>
            <p className="my-3">Accounting services for self-employers and partnerships</p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
