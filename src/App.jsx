// importiamo gli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

// pages
import HomePage from "./pages/HomePage";
import ChiSiamo from "./pages/ChiSiamo";
import ListPost from "./pages/ListPost";


function App() {
  

  return (
    <>
      <BrowserRouter>

        <Routes>

            {/* DefaultLayout viene utilizzato come layout di default per le rotte */}
          <Route element={<DefaultLayout />}>
          
              {/* Definizione delle rotte */}
            <Route path="/" element={<HomePage />} />
            <Route path="/chisiamo" element={<ChiSiamo />} />
            <Route path="/listpost" element={<ListPost />} />

          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
