import React from "react";
import searchLogo from "../assets/img/search.png";

export default function Search() {
  return (
    <div className="searchs">
      <span>
        <img src={searchLogo} />
      </span>
      <input ref={ref} placeholder="Search apps, plugins and more" />
    </div>
  );
}
