import { Link } from "react-router-dom";

function Hadith() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-green-100 p-4 flex justify-between items-center">
        <ul className="flex space-x-6">
          <li className="font-bold text-gray-800">
            {" "}
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
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 p-2 rounded border border-gray-300"
          />
        </div>
      </nav>

      <h1>Comming Soon...............</h1>
    </>
  );
}

export default Hadith;
