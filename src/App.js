import React, { useState } from "react";
import Data from "./Data";
import "./App.css";
const App = () => {
  let [val, setVal] = useState(Data);
  console.log(val);

  return (
    <div className="bg">
      <div
        className="page"
        // style={{
        //   marginLeft: "45%",
        //   height: "650px",
        //   border: "solid 1px red",
        //   width: "300px",
        // }}
      >
        <h2>{val.length}birthdays today</h2>
        {val.map(res => {
          return (
            <div>
              <img
                src={res.image}
                alt=""
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                }}
              />
              <ruby>
                <rt>
                  <h2>
                    {res.name}
                    <br />
                    {res.age}
                  </h2>
                </rt>

                {/* {res.age} */}
              </ruby>
            </div>
          );
        })}
        <button
          onClick={() => setVal([])}
          style={{ borderRadius: "10px", color: "blue" }}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default App;
