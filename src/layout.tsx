import { ReactNode } from "react";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import useProtectRoute from "./hooks/useProtectRoute";

/**
 * Layout 컴포넌트
 *
 * - useProtectRoute에서 isAuthenticated가 false로 넘어온다면 에러 던지기
 * - 에러바운더리로 처리 넘기기..? 에러바운더리가 필요하지 않다. 어짜피 로그인 페이지로 보내니까
 */

export default function Layout({ children }: { children: ReactNode }) {
  useProtectRoute(); // 로그인 안한 사용자는 리다이렉트

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex bg-background justify-center items-start">{children}</main>
      <Footer />
    </div>
  );
}
