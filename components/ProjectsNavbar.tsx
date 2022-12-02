import { FunctionComponent } from "react";
import { Category } from "../types";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-blue-700";
  if (active === value) className += " text-blue-900 text-lg";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="javaScript" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="typeScript" {...props} />
      <NavItem value="C#" {...props} />
      <NavItem value="mongoDB" {...props} />
      <NavItem value="postgreSQL" {...props} />
      <NavItem value="serverless" {...props} />
      <NavItem value="AWS" {...props} />
      <NavItem value="Azure" {...props} />
      
    </div>
  );
};

export default ProjectsNavbar;
