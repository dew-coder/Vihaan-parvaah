import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center text-black my-10">
      
      <div className="flex justify-center items-center text-4xl font-semibold">ParVaah</div>

      
      <ul className="flex justify-center items-center gap-16">
        <li className=" text-gray-500 hover:text-purple-700  cursor-pointer">
          Food & Supplements
        </li>
        <li className="text-gray-500 hover:text-purple-700  cursor-pointer">
          Health & Fitness
        </li>
        <li className="text-gray-500 hover:text-purple-700  cursor-pointer">
          FAQ
        </li>
      </ul>

      {/* Get Started button */}
      <Link to="/chat">
        <button className=" bg-slate-950 text-white  text-xl px-3 py-2 rounded-2xl hover:bg-black">
          Ask Your Doubt!
        </button>
      </Link>
    </header>
  );
};

export default Header;
