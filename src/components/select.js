import React from "react";
import Select from "react-dropdown-select";

const options = [
  { value: "all Products", label: "All Products" },
  { value: "photos", label: "Photos" },
  { value: "graphics", label: "Graphics" },
  { value: "templates", label: "Templates" },
  { value: "plugins", label: "Plugins" },
];

export default function Selects() {
  return (
    <div className="selects">
      <Select
        options={options}
        searchable={false}
      />
    </div>
  );
}
