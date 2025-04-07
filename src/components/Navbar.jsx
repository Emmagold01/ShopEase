import { Icon } from '@iconify/react';
import person from '../assets/images/person.jpg';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleBtn() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="p-6 my-3 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center space-x-5">
          <div>
            <h1 className="font-bold text-2xl cursor-pointer relative z-50">
              ShopEase
            </h1>
          </div>
          <div className="hidden md:flex flex-row items-center space-x-5">
            <p className="font-semibold text-gray-700 text-md mt-1 cursor-pointer hover:text-blue-600">
              Home
            </p>
            <p className="font-semibold text-gray-700 text-md mt-1 cursor-pointer hover:text-blue-600">
              Product
            </p>
          </div>
        </div>
        <div className="hidden md:flex flex-row items-center space-x-5">
          <Icon
            icon="fa6-solid:user-large"
            width="24"
            height="24"
            className="cursor-pointer hover:text-blue-700"
          />
          <Icon
            icon="fa-solid:shopping-cart"
            width="24"
            height="24"
            className="cursor-pointer hover:text-blue-700"
          />
          <img
            src={person}
            alt=""
            className="rounded-full w-10 h-10 object-cover object-fit object-center"
          />
        </div>
        <button className="md:hidden" onClick={toggleBtn}>
          <Icon
            icon={isOpen ? 'fa-solid:times' : 'fa-solid:bars'}
            width="24"
            height="24"
            className="cursor-pointer relative z-50"
          />
        </button>
      </div>

      <div
        className={`menu ${
          isOpen ? '' : 'hidden'
        } fixed inset-0 z-20 flex flex-col justify-center items-center py-1 font-display text-white text-xl bg-white opacity-90 divide-y divide-gray-500 uppercase`}
      >
        <div className="flex flex-col text-center space-y-5 ">
          <a className="font-semibold text-gray-700 text-md mt-1 cursor-pointer hover:text-blue-600">
            Home
          </a>
          <a className="font-semibold text-gray-700 text-md mt-1 cursor-pointer hover:text-blue-600">
            Product
          </a>
          <a className="font-semibold text-gray-700 text-md mt-1 cursor-pointer hover:text-blue-600">
            About
          </a>
        </div>
        <div className="mt-5 flex flex-row items-center space-x-5">
          <Icon
            icon="fa6-solid:user-large"
            width="24"
            height="24"
            className="cursor-pointer text-black hover:text-blue-700"
          />
          <Icon
            icon="fa-solid:shopping-cart"
            width="24"
            height="24"
            className="cursor-pointer text-black hover:text-blue-700"
          />
          <img
            src={person}
            alt=""
            className="rounded-full w-10 h-10 object-cover object-fit object-center"
          />
        </div>
      </div>
    </>
  );
}
