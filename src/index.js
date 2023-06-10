import React, { useEffect } from "react";

const IsActive = ({ timer, callback }) => {
  useEffect(() => {
    let debounceTimer;
    document.addEventListener("mousemove", () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        let lastDate = localStorage.getItem("isactivestate");
        if (Date.now() - lastDate > timer) {
          callback();
        }
        localStorage.setItem("isactivestate", Date.now());
      }, 300);
    });
    return () => {
      document.removeEventListener("mousemove", () => {
        console.log("removed Mouse move");
      });
    };
  }, []);

  return <span className="ISACTIVE"></span>;
};

export default IsActive;
