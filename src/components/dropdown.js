import React from "react";
import Select from "./select";
import Search from "./search";

export default function Dropdown() {
  return (
    <>
      <div className="box">
        <div className="main">
          <Select />
          <Search />
        </div>
      </div>
      <div className="designBy">
        <h1>By</h1>
        <p> Mustafa Karaçuha</p>
      </div>
    </>
  );
}
