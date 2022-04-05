import React, {useState} from "react";
import 'normalize.css';

import mockedData from "../data.json"

// import { PracticeContainer } from "./parctice/PracticeContainer";
// import { Counter } from "./parctice/Counter";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { List } from "./components/List";

import './index.css'



export const App = () => {
    const [foodList, setFoodList] = useState(mockedData)
    console.log(foodList);
  return (
    <div className="appConteiner">
        <Header changeList={setFoodList}/>
        <List list={foodList}/>
        <Footer />
       {/* <PracticeContainer />
       <Counter /> */}
    </div>
  );
};
