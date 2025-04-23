/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Folder = ({ fileData }) => {
  const [file, setfileData] = useState(fileData);
  const [folderStack, setfolderStack] = useState([]);
  const [forwardfolderStack, setforwardfolderStack] = useState([]);
  const [oprnForm, setOpenForm] = useState(false);

  const handleOnClick = (newFolder, preFile) => {
    setfileData(newFolder.children);
    let fileStack = [...folderStack];
    fileStack.push(preFile);
    setfolderStack(fileStack);
    setforwardfolderStack(newFolder.children);
    setOpenForm(false);
  };

  const handleBack = () => {
    setOpenForm(false);
    let fileStack = [...folderStack];
    if (folderStack.length) {
      setfileData(folderStack[folderStack.length - 1]);
      console.log(fileStack.pop());
      setfolderStack(fileStack);
    }
  };

  const handleFront = (preFile) => {
    setOpenForm(false);
    let fileforwardStack = [...forwardfolderStack];
    if (forwardfolderStack.length) {
      setfileData([...fileforwardStack]);
      let fileStack = [...folderStack];
      fileStack.push(preFile);
      setfolderStack(fileStack);
    }
  };

  const handleForm = () => {
    setOpenForm(true);
  };
  return (
    <div className=" flex flex-col gap-2 h-[100vh] justify-center items-center">
      <div className=" flex gap-2 ">
        <div
          className=" w-[200px] h-[100px] text-4xl flex justify-center items-center cursor-pointer"
          onClick={handleBack}
        >
          {"<"}
        </div>
        <div className=" flex gap-2 ">
          {file.map((ele) => {
            if (ele.isFolder) {
              return (
                <div
                  key={ele.id}
                  className=" w-[100px] h-[100px] bg-black text-white flex justify-center items-center rounded-[50px] cursor-pointer"
                  onClick={() => handleOnClick(ele, file)}
                >
                  {ele.name}
                </div>
              );
            } else {
              return (
                <div
                  key={ele.id}
                  className="w-[100px] h-[100px] bg-red-600 text-white flex justify-center items-center rounded-[50px] "
                >
                  {ele.name}
                </div>
              );
            }
          })}
          <div
            className="w-[100px] h-[100px] bg-green-600 text-white flex justify-center text-[30px] items-center rounded-[50px] cursor-pointer "
            onClick={() => handleForm(file)}
          >
            {"+"}
          </div>
        </div>
        <div
          className=" w-[200px] h-[100px] text-4xl flex justify-center items-center cursor-pointer"
          onClick={() => handleFront(file)}
        >
          {">"}
        </div>
      </div>
      {oprnForm && <Form file={file} setfileData={setfileData} />}
    </div>
  );
};

export default Folder;
let id = 100;
const Form = ({ file, setfileData }) => {
  const [formData, setformData] = useState({ name: "", isFolder: false });
  const hanldeOnChange = (e) => {
    let type = e.target.id == "Folder";
    if (e.target.name == "type")
      setformData((pre) => ({ ...pre, isFolder: type, children: [] }));
    else
      setformData((pre) => ({
        ...pre,
        id: id++,
        [e.target.name]: e.target.value,
      }));
  };

  const handleOnCreate = (e) => {
    e.preventDefault();
    if (!formData.name.length) return;
    file.push(formData);
    console.log(file);
    setfileData([...file]);
    setformData({ name: "", isFolder: false });
  };
  return (
    <form className=" flex flex-col border w-[50%] mx-auto my-5 p-5">
      <div className=" flex gap-2 justify-center items-center">
        <label htmlFor="name">Name</label>
        <input
          className=" border outline-none px-2"
          type="text"
          id="name"
          name="name"
          value={formData["name"]}
          onChange={hanldeOnChange}
        />
      </div>
      <div className=" flex  justify-center items-center gap-2">
        <label htmlFor="File">File</label>
        <input type="radio" name="type" id="File" onClick={hanldeOnChange} />
        <label htmlFor="Folder">Folder</label>
        <input type="radio" name="type" id="Folder" onClick={hanldeOnChange} />
      </div>
      <div>
        <button onClick={handleOnCreate} className=" w-full ">
          {" "}
          create{" "}
        </button>
      </div>
    </form>
  );
};
