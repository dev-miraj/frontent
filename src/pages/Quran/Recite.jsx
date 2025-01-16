import { Link } from "react-router-dom";

const Recite = () => {
  return (
    <div className="min-h-screen bg-pink-50">
      {/* Navbar */}
      <nav className="bg-green-100 p-4 flex justify-between items-center">
        <ul className="flex space-x-6">
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
        <div>
          {/* <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 p-2 rounded border border-gray-300"
            /> */}
        </div>
      </nav>

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
      <div className="px-4 py-6 max-w-4xl mx-auto">
        <h1 className="text-center text-2xl font-bold text-gray-700 mb-6">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </h1>

        <div className="space-y-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-4 gap-4 items-center border-b border-gray-300 py-2"
            >
              <p className="text-center font-bold text-gray-600">
                الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
              </p>
              <p className="text-center font-bold text-gray-600">
                الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
              </p>
              <p className="text-center font-bold text-gray-600">
                الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
              </p>
              <p className="text-center font-bold text-gray-600">3</p>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div className="text-center mt-6">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-purple-700">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recite;
