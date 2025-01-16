import { Link } from "react-router-dom";

const Quran = () => {
  return (
    <div className="bg-pink-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-green-200 p-4 flex flex-col sm:flex-row justify-between items-center">
        <ul className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6 mb-4 sm:mb-0">
          <li className="font-bold text-gray-800 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="text-gray-600 cursor-pointer">
            <Link to="/quran">Quran</Link>
          </li>
          <li className="text-gray-600 cursor-pointer">
            <Link to="/hadith">Hadith</Link>
          </li>
          <li className="text-gray-600">Salah</li>
          <li className="text-gray-600">I-Wall</li>
          <li className="text-gray-600">Donars</li>
          <li className="text-gray-600">About Us</li>
        </ul>
        <div className="w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 w-full sm:w-auto p-2 rounded border border-gray-300"
          />
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-4 sm:p-6">
        {/* Slider */}
        <div className="bg-blue-100 rounded-lg p-6 flex items-center justify-between flex-wrap">
          <button className="p-2 rounded-full bg-white shadow">&#9664;</button>
          <div className="text-center text-gray-600 flex-grow">
            Slider Content
          </div>
          <button className="p-2 rounded-full bg-white shadow">&#9654;</button>
        </div>

        {/* Buttons Section */}
        <div className="mt-8 flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center items-center">
          <link rel="stylesheet" href="" />
          <Link to="/recite">
            <button className="bg-green-500 text-white font-semibold py-3 px-8 text-lg rounded-lg shadow-md hover:bg-green-600 w-3/4 sm:w-auto">
              Recit
            </button>
          </Link>

          <Link to="/transliteration">
            <button className="bg-green-500 text-white font-semibold py-3 px-8 text-lg rounded-lg shadow-md hover:bg-green-600 w-3/4 sm:w-auto">
              Transliteration
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quran;
