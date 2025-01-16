import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Quran from "./pages/Quran/Quran.jsx";
import Recite from "./pages/Quran/Recite.jsx";
import Transliteration from "./pages/Transliteration/Transliteration.jsx";
import Tafsir from "./pages/Tafsir/Tafsir.jsx";
import Theme from "./pages/Theme/Theme.jsx";
import Hadith from "./pages/Hadith/Hadith.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quran",
    element: <Quran />,
  },
  {
    path: "/recite",
    element: <Recite />,
  },
  {
    path: "/transliteration",
    element: <Transliteration />,
  },
  {
    path: "/tafsir",
    element: <Tafsir />,
  },
  {
    path: "/theme",
    element: <Theme />,
  },
  {
    path: "/hadith",
    element: <Hadith />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
