import "./App.css";
import React, { Suspense, lazy } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";
import  ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { Layout } from "./components/Layout/Layout";

const StorePage = lazy(() => import("./Pages/StorePage/StorePage"));
const OneItemPage = lazy(() => import("./Pages/OneItemPage/OneItemPage"));


const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="shop" index element={<StorePage />} />
                <Route path="oneItem" element={<OneItemPage />} />
              </Route>
            </Routes>
          </ErrorBoundary>
        </Suspense>
      </BrowserRouter>

    </div>
  );
};

export default App;
