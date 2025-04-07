import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <div className="bg-slate-950 py-20 p-3 w-full">
      <div className="container mx-auto">
        <div>
          <h1 className="font-bold text-white text-center">
            Suscribe to Our newsletter
          </h1>
          <div className="flex flex-row justify-center mt-3">
            <input
              type="email"
              placeholder="✉️ Input Your Email"
              className=" border-2 border-neutral-200  rounded-l-full outline-none bg-none px-6 pt-3 pb-2.5 text-sm text-neutral-200"
            />
            <button className="font-bold bg-blue-600 text-white px-6 pt-3 pb-2.5 rounded-r-full cursor-pointer hover:bg-blue-500">
              Suscribe
            </button>
          </div>
        </div>
        <div className="mt-9 flex flex-col justify-between space-y-3 items-center max-w-4xl mx-auto md:flex-row">
          <div className="text-white font-bold text-2xl">
            <h1>ShopEase</h1>
          </div>
          <div className="text-neutral-400 text-sm flex flex-col space-y-3 md:flex-row md:space-x-3">
            <p>Pricing</p>
            <p>About Us</p>
            <p>Features</p>
            <p>Help Center</p>
            <p>Contact Us</p>
            <p>Contact Us</p>
            <p>FAQs</p>
            <p>Careers</p>
          </div>
        </div>
        <div className="border border-neutral-700 my-6 mx-auto w-full max-w-6xl" />
        <div className="space-y-4 flex flex-col items-center max-w-4xl mx-auto md:flex-row md:justify-between ">
          <div className="text-white flex items-center space-x-3 border-2 border-neutral-400 px-6 pt-3 pb-2.5 rounded-lg w-fit">
            <h1>English</h1>
            <Icon icon="fa-solid:angle-down" />
          </div>
          <div className="text-white text-sm font-bold">
            <h2>© 2025 Brand, Inc. • Privacy • Terms • Sitemap</h2>
          </div>
          <div className="flex flex-row space-x-5">
            <Icon icon="fa-brands:twitter" className="text-cyan-300" />
            <Icon icon="fa-brands:facebook" className="text-blue-600" />
            <Icon icon="fa-brands:linkedin" className="text-blue-700" />
            <Icon icon="fa-brands:youtube" className="text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
