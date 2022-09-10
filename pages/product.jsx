import React from "react";
import Image from "next/image";

import {
  AiFillFacebook,
  AiFillSkype,
  AiFillTwitterCircle,
  AiOutlineHeart,
  AiOutlineInstagram,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function product(props) {
  return (
    <div
      id="parentContainer"
      className="w-full h-screen overflow-auto m-0 py-8 px-16 box-border text-teal-700 flex flex-col"
    >
      <div id="header" className="w-full flex mb-4">
        <h1 className="text-xl text-slate-600 w-1/3">Furniture</h1>
        <div id="nav" className="w-2/3 flex justify-evenly items-center">
          <a href="#" className="nav-link">
            About us
          </a>
          <a href="#" className="nav-link">
            Furniture
          </a>
          <a href="#" className="nav-link">
            Our service
          </a>
          <a href="#" className="nav-link">
            Blog
          </a>
          <a href="#" className="nav-link">
            Contact us
          </a>
          <div className="flex">
            <a href="#" className="nav-link">
              <AiOutlineShoppingCart size={25} />
            </a>
            <a href="#" className="nav-link">
              <AiOutlineUser size={25} />
            </a>
          </div>
        </div>
      </div>
      <div id="main" className="flex w-full">
        <div id="details" className="flex flex-col w-1/2">
          <div className="h-1/5">
            <div
              id="route"
              className=" text-slate-900 flex items-end m-2 text-sm font-semibold"
            >
              <span className="text-slate-500">Chair / </span>
              <span>Normal Sitting Chair</span>
            </div>
            <h1 className="text-6xl">Refreshing</h1>
          </div>
          <div
            id="priceAndDetails"
            className="h-2/5 flex flex-col justify-evenly items-center"
          >
            <p className="text-sm font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              sint dignissimos veritatis incidunt harum ea provident doloribus,
              atque, quidem maiores, quia at aperiam. Obcaecati ipsum
              perferendis quo atque molestias hic?
            </p>
            <div className="flex w-full justify-start items-center">
              <h2 className="text-slate-700 text-3xl mx-4 font-bold">$586</h2>
              <div className="flex justify-center align-center">
                <div
                  id="color"
                  className="w-4 h-4 mx-1 rounded-full bg-rose-600 shadow-rose-900 shadow-md border-2 border-rose-700"
                ></div>
                <div
                  id="color"
                  className="w-4 h-4 mx-1 rounded-full bg-cyan-600"
                ></div>
                <div
                  id="color"
                  className="w-4 h-4 mx-1 rounded-full bg-slate-600"
                ></div>
                <div
                  id="color"
                  className="w-4 h-4 mx-1 rounded-full bg-yellow-600"
                ></div>
              </div>
            </div>
          </div>
          <div
            id="buttonsAndTags"
            className="h-1/5 flex flex-col justify-between"
          >
            <button className="px-8 py-3 w-1/2 rounded-xl bg-teal-700 font-semibold text-white">
              Add To Cart
            </button>
            <div className="flex justify-evenly w-full text-slate-500 text-sm font-semibold">
              <p>Free 2-5day shipping</p>.<p>Tool-free assembly</p>.
              <p>30-Day trial</p>
            </div>
          </div>
          <div id="footer" className="h-1/5 flex justify-between items-center">
            <button className="border-none bg-transparent px-4 py-2 flex justify-between items-center text-slate-500 hover:shadow-md hover:rounded-md active:shadow-inner">
              <AiOutlineHeart size={25} className="mx-2" />
              Add to Whishlist
            </button>
            <div className="flex items-center space-x-4 mr-4">
              <AiFillFacebook className="text-blue-800" />
              <AiFillTwitterCircle className="text-cyan-600" />
              <AiFillSkype className="text-cyan-600" />
              <AiOutlineInstagram className="text-rose-500" />
            </div>
          </div>
        </div>
        <div id="images" className="w-1/2 flex flex-col">
          <div
            id="imageContainer"
            className="h-4/5 w-full flex flex-col justify-center relative"
          >
            <Image
              src="/images/2.webp"
              alt="chair"
              width={1000}
              height={1000}
            />
            <div id="controls" className="flex flex-col absolute top-2 right-2">
              <p className="font-bold text-slate-900 text-2xl">
                01 <sup className="text-slate-500 font-normal">/ 05</sup>
              </p>
              <div className="flex justify-between w-full text-slate-900 mt-2">
                <div className="p-2 hover:shadow-md active:shadow-inner">
                  <FaAngleLeft />
                </div>
                <div className="p-2 hover:shadow-md active:shadow-inner">
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly items-center w-full h-1/5">
            <div className="w-1/5 p-2 hover:shadow-md active:shadow-inner">
              <Image
                src="/images/4.webp"
                alt="chair"
                width={200}
                height={200}
              />
            </div>
            <div className="w-1/5 p-2 hover:shadow-md active:shadow-inner">
              <Image src="/images/1.jpg" alt="chair" width={200} height={200} />
            </div>
            <div className="w-1/5 p-2 hover:shadow-md active:shadow-inner border">
              <Image
                src="/images/2.webp"
                alt="chair"
                width={200}
                height={200}
              />
            </div>
            <div className="w-1/5 p-2 hover:shadow-md active:shadow-inner">
              <Image src="/images/3.jpg" alt="chair" width={200} height={200} />
            </div>

            <div className="w-1/5 p-2 hover:shadow-md active:shadow-inner">
              <Image src="/images/5.jpg" alt="chair" width={200} height={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default product;
