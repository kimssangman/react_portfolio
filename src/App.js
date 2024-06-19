import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";
import HompageLayout from "./pages/HomepageLayout/HomepageLayout";

function App() {
    return (
        <div className="App">
            <Routes>
                {/* 페이지 경로 /list로 설정 */}
                {/* <Route path="/" element={<Navigate to="/list" />} /> */}

                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <HompageLayout />
                        </>
                    }
                />

                {/* 경로가 일치하지 않을 때 NotFoundPage를 렌더링 */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;
