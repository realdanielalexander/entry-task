import React from "react";
import { SearchOutlined } from "@ant-design/icons";

const SearchButton = () => {
    return (
        <button className="search-button">
            <SearchOutlined style={{ color: "white", fontSize: "1.125rem" }} />
        </button>
    );
};

export default SearchButton;
