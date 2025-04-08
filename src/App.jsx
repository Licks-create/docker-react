/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Select from "./components/Select";
import fileStruct from "../data.json";
import Folder from "./components/Folder";

const alldata = [
  {
    id: 1,
    label: "Fruits",
    checked: false,
    children: [
      { id: 2, label: "Apple", checked: false },
      { id: 3, label: "Banana", checked: false },
      {
        id: 4,
        label: "Citrus",
        checked: false,
        children: [
          { id: 5, label: "Orange", checked: false },
          { id: 6, label: "Lemon", checked: false },
          { id: 7, label: "Lime", checked: false },
          {
            id: 99,
            label: "inside citrus",
            checked: false,
            children: [
              { id: 100, label: "Orange", checked: false },
              { id: 101, label: "Lemon", checked: false },
              { id: 102, label: "Lime", checked: false },
            ],
          },
        ],
      },
      {
        id: 8,
        label: "Berries",
        checked: false,
        children: [
          { id: 9, label: "Strawberry", checked: false },
          { id: 10, label: "Blueberry", checked: false },
          { id: 11, label: "Raspberry", checked: false },
        ],
      },
    ],
  },
  {
    id: 12,
    label: "Vegetables",
    checked: false,
    children: [
      { id: 13, label: "Carrot", checked: true },
      { id: 14, label: "Broccoli", checked: false },
      {
        id: 15,
        label: "Leafy Greens",
        checked: false,
        children: [
          { id: 16, label: "Spinach", checked: false },
          { id: 17, label: "Lettuce", checked: false },
          { id: 18, label: "Kale", checked: false },
        ],
      },
    ],
  },
  {
    id: 19,
    label: "Dairy",
    checked: false,
    children: [
      { id: 20, label: "Milk", checked: false },
      { id: 21, label: "Cheese", checked: false },
      { id: 22, label: "Butter", checked: false },
      {
        id: 23,
        label: "Yogurt",
        checked: false,
        children: [
          { id: 24, label: "Greek Yogurt", checked: false },
          { id: 25, label: "Flavored Yogurt", checked: false },
        ],
      },
    ],
  },
  {
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
  },
];

console.log({ fileStruct });

function App() {

  
  return (
    <div>
      <Folder fileData={fileStruct}/>
    
      {/* {alldata.map((ele) => {
        return <Select key={ele.id} data={ele} />;
      })} */}
    </div>
  );
}

export default App;
