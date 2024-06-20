import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";
import HompageLayout from "./pages/HomepageLayout/HomepageLayout";

function App() {
    /**--------------------------------------------
     * 헤더 메뉴를 누르면 해당 위치로 이동
     * 
     * 2. HomepageLayout 컴포넌트에서 scrollToRef 객체를 Header 컴포넌트로 props로 전달
     --------------------------------------------*/
    const scrollToRef = {};

    return (
        <div className="App">
            <Routes>
                {/* 페이지 경로 /list로 설정 */}
                {/* <Route path="/" element={<Navigate to="/list" />} /> */}

                <Route
                    path="/"
                    element={
                        <>
                            <Header scrollToRef={scrollToRef} />
                            <HompageLayout scrollToRef={scrollToRef} />
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
