import { Link } from "react-router-dom";

const Transliteration = () => {
  return (
    <div className="min-h-screen bg-pink-50">
      {/* Navbar */}
      <nav className="bg-green-200 px-4 py-3 flex justify-between items-center">
        <div className="flex space-x-4">
          <a className="font-bold text-gray-800 cursor-pointer">
            <Link to="/">Home</Link>
          </a>
          <a className="text-gray-600 cursor-pointer">
            <Link to="/quran">Quran</Link>
          </a>
          <a className="text-gray-600 cursor-pointer">
            <Link to="/hadith">Hadith</Link>
          </a>
          <a href="#" className="text-gray-800 font-semibold">
            Salah
          </a>
          <a href="#" className="text-gray-800 font-semibold">
            I-Wall
          </a>
          <a href="#" className="text-gray-800 font-semibold">
            Donars
          </a>
          <a href="#" className="text-gray-800 font-semibold">
            About Us
          </a>
        </div>
      </nav>

      {/* Header */}
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold text-gray-800">The Holy Quran</h1>
        <p className="text-lg text-gray-600">Read, Listen and Search</p>
        <p className="text-md text-gray-500">Arabic, Bangla, English</p>
      </div>

      {/* Filters */}
      <div className="bg-gray-100 px-4 py-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4 md:flex md:justify-between md:items-center">
          <select className="w-full md:w-auto border-gray-300 rounded-md shadow-sm">
            <option>Para number</option>
          </select>

          <select className="w-full md:w-auto border-gray-300 rounded-md shadow-sm">
            <option>Sura name</option>
          </select>

          <div className="w-full md:w-auto relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full border-gray-300 rounded-md shadow-sm px-3 py-2"
            />
          </div>

          <select className="w-full md:w-auto border-gray-300 rounded-md shadow-sm">
            <option>Vers</option>
          </select>

          <button className="bg-gray-300 px-4 py-2 rounded-md">Filter</button>
        </div>
      </div>

      {/* Quran Content */}
      <div className="px-4 py-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-4 border border-gray-200 flex justify-between items-center"
          >
            <p className="text-gray-600 font-semibold">1. Al-Fatihah</p>
            <p className="text-gray-600 font-semibold">الفَاتِحَة</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transliteration;
