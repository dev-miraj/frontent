import quran from "../../assets/quran.png";
import tafsir from "../../assets/tafsir.png";
import theme from "../../assets/theme.png";
import hadith from "../../assets/hadith.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="bg-pink-50 min-h-screen">
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
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 p-2 rounded border border-gray-300"
            />
          </div>
        </nav>

        {/* Main Content */}
        <div className="p-6">
          {/* Slider */}
          <div className="bg-blue-100 rounded-lg p-6 flex items-center justify-between">
            <button className="p-2 rounded-full bg-white shadow">
              &#9664;
            </button>
            <div className="text-center text-gray-600 w-full">
              Slider Content
            </div>
            <button className="p-2 rounded-full bg-white shadow">
              &#9654;
            </button>
          </div>

          {/* Sections */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link to="/quran">
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <img
                  src={quran} // Replace with actual image path
                  alt="Quran"
                  className="mx-auto w-16 h-16 mb-4"
                />
                <h3 className="text-lg font-semibold">Quran</h3>
              </div>
            </Link>

            <Link to="/tafsir">
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <img
                  src={tafsir} // Replace with actual image path
                  alt="Tafsir"
                  className="mx-auto w-16 h-16 mb-4"
                />
                <h3 className="text-lg font-semibold">Tafsir</h3>
              </div>
            </Link>

            <Link to="/hadith">
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <img
                  src={hadith} // Replace with actual image path
                  alt="Hadith"
                  className="mx-auto w-16 h-16 mb-4"
                />
                <h3 className="text-lg font-semibold">Hadith</h3>
              </div>
            </Link>

            <Link to="/theme">
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <img
                  src={theme} // Replace with actual image path
                  alt="Theme"
                  className="mx-auto w-16 h-16 mb-4"
                />
                <h3 className="text-lg font-semibold">Theme</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
