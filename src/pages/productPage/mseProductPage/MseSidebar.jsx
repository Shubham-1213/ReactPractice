import { Select } from "antd";
import React, { useState, useEffect } from "react";

import { Link, NavLink , useLocation} from "react-router-dom";

const { Option } = Select;

const selectOptions = [
  {
    title: "Hospital Medical Furniture",
    path: "",
  },
  {
    title: "Orthopaedic Implants & Instrument",
    path: "ortho",
  },
  {
    title: "Diagnostic Equipment & Products",
    path: "diagno",
  },
];

export default function LsSidebar() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const handleChange = (value) => {
    window.location.href = value;
  };

  return (
    <div>
      <div>
        <div className="hidden lg:block">
          <div className="flex flex-col  k  w-72  text-white">
            {selectOptions.map((props, index) => (
              <NavLink
                key={index}
                to={props.path}
                className={() =>
                  `hover:bg-white text-xs font-bold px-4 hover:border border border-white text-graydark py-4 ${activePath === `/${props.path}` ? "bg-orange text-white hover:text-black hover:bg-orangeshade" : "bg-graypowderlight"}`
                }
                onClick={() => setActivePath(`/${props.path}`)}
              >
                {props.title}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="block lg:hidden">
          <div className="flex justify-center py-5">
            <Select style={{ width: "350px" }}
            defaultValue={selectOptions[0].title}
            onChange={handleChange}>
              {selectOptions.map((option) => (
                <Option key={option.path}>
                  <div>
                    <Link to={option.path}>{option.title}</Link>
                  </div>
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
