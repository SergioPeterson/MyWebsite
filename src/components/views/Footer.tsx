import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="footer flex justify-end items-center h-20 m-7 text-slate">
      <div>
        <p>
          Inspired by{" "}
          <a
            href="https://brittanychiang.com"
            target="_blank"
            rel="noreferrer"
            className="no-underline hover:underline hover:text-white decoration-green"
          >
            Brittany Chiang
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
