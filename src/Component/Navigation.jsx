import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <nav className="bg-zinc-800  shadow-2xl h-18">
        <div className="flex flex-row mx-10 py-0 text-sky-400/100">
          <div className="basis-3/4 ">
            <p className="font-bold text-5xl text-purple-900">R.D.</p>
          </div>
          <div className="grid grid-cols-3 basis-1/4 group">
            <Link
              to="/home"
              className="basis-1/3 p-5 text-gray-400 text-center hover:bg-black"
            >
              Home
            </Link>

            <Link
            to="/about"
            className="basis-1/3 p-5 text-gray-400 text-center hover:bg-black"
          >
            About
          </Link>

          <Link
            to="/Contact"
            className="basis-1/3 p-5 text-gray-400 text-center hover:bg-black"
          >
            Contact
          </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
