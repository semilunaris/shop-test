// App.tsx
import "./App.css";
import React, { Suspense, lazy } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { Layout } from "./components/Layout/Layout";
import { Provider } from "react-redux"; // Импортируем Provider
import store from "./store"; // Импортируем наш store

const StorePage = lazy(() => import("./Pages/StorePage/StorePage"));
const OneItemPage = lazy(() => import("./Pages/OneItemPage/OneItemPage"));

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}> {/* Оборачиваем все приложение в Provider */}
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route path="shop" index element={<StorePage />} />
                  <Route path="oneItem" element={<OneItemPage />} />
                </Route>
              </Routes>
            </ErrorBoundary>н
            
          </Suspense>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
