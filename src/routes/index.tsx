import LoginPage from "@/pages/LoginPage";
import { Route, Routes } from "react-router";

/**
 * react-router-dom 라우트 관리
 *
 * 1. 로그인 페이지
 * 2. API 목록 조회 페이지
 * 3. 호출 목록 조회 페이지
 */

export default function RouteApp() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      {/* <Route path="/" element={} /> */}
      {/* <Route path="/" element={} /> */}
    </Routes>
  );
}
