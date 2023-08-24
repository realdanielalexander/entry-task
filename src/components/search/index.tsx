import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import SearchButton from "../buttons/SearchButton";

const SearchBar = (props: JSX.IntrinsicElements["input"]) => {
  const { ...rest } = props;
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
      }}
    >
      <SearchOutlined
        style={{
          position: "absolute",
          height: "100%",
          left: 12,
          top: 16,
          color: "gray",
        }}
      />
      <input
        style={{
          padding: "1rem 2rem .75rem 2.5rem",
          width: "100%",
          height: "100%",
          border: "none",
          outline: "none",
          borderRadius: "8px",
        }}
        {...rest}
      ></input>
      <SearchButton />
    </div>
  );
};

export default SearchBar;
