/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const demoData = {
  id: 26,
  label: "Meat",
  checked: false,
  children: [
    { id: 27, label: "Chicken", checked: false },
    { id: 28, label: "Beef", checked: false },
    {
      id: 29,
      label: "Seafood",
      checked: false,
      children: [
        { id: 30, label: "Salmon", checked: false },
        { id: 31, label: "Shrimp", checked: false },
      ],
    },
  ],
};
const Select = ({ data, w = 1 }) => {
  const [checked, setchecked] = useState(data.checked);
  const [checkedOptions, setcheckedOptions] = useState(
    new Array(data.children.length).fill(false)
  );
  const [show, setShow] = useState(true);

  useEffect(() => {
    let checkedARr = new Array(data.children).fill(0);
    data.children.map((d, i) => {
      if (!d.children) checkedARr[i] = d.checked;
    });
    setcheckedOptions(checkedARr);
  }, [data]);

  const handleChecked = (d, i) => {
    let checkedARr = [...checkedOptions];
    checkedARr[i] = !checkedARr[i];
    setcheckedOptions((pre) => checkedARr);

    let flag = true;
    checkedARr.map((ele) => {
      if (!ele) {
        flag = false;
      }
    });
    setchecked(flag);
  };

  const handleParentCheck = (d) => {
    setchecked(!checked);
    if (!checked) {
      setcheckedOptions(new Array(d.children.length).fill(true));
    } else {
      setcheckedOptions(new Array(d.children.length).fill(false));
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        name=""
        id={data.id}
        onChange={() => handleParentCheck(data)}
      />
      <label
        className=" font-bold"
        htmlFor={data.id}
        onClick={() => setchecked(!checked)}
      >
        {data.label}
      </label>
      <span className=" cursor-pointer" onClick={() => setShow(!show)}>
        {show ? "❌" : " V"}
      </span>
      <div className=" px-4 flex flex-col">
        {show &&
          data.children.map(
            (ele, i) => (
              // !ele.children ? (
              <span className="" key={ele.id}>
                <input
                  type="checkbox"
                  checked={checkedOptions[i]}
                  name={ele.label || "label"}
                  id={ele.id}
                  onChange={(e) => handleChecked(ele, i)}
                />
                <label
                  className=" text-sm px-2"
                  htmlFor={ele.id}
                  onClick={() => handleChecked(ele, i)}
                >
                  {ele.label}
                </label>
                {ele.children && <Select key={ele.id} data={ele} w={i} />}
              </span>
            )
          )}
      </div>
    </div>
  );
};

export default Select;
