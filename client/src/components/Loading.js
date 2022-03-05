import React from "react";

export default function Loading(size) {
  return (
    <div className="text-center">
      <div
        className="spinner-border"
        role="status"
        style={{ width: size, height: size }}
      ></div>
    </div>
  );
}
