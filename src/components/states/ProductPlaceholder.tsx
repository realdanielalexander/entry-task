import React from "react";

const ProductPlaceholder = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        padding: 8,
        background: "#FFFFFF",
      }}
    >
      <div
        style={{
          aspectRatio: 1,
          position: "relative",
          backgroundColor: "#EFEFF2",
          borderRadius: 12,
          width: "100%",
          height: 0,
          paddingBottom: "100%",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          marginTop: 12,
          paddingBottom: 16,
          borderRadius: 12,
          backgroundColor: "#EFEFF2",
        }}
      />
      <div
        style={{
          width: "100%",
          marginTop: 12,
          paddingBottom: 16,
          borderRadius: 12,
          backgroundColor: "#EFEFF2",
        }}
      />
    </div>
  );
};

export default ProductPlaceholder;
