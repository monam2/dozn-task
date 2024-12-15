import useAuthStore from "@/store/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

/**
 * 페이지 접근 허용 커스텀 훅
 *
 * - 로그인하지 않은 사용자는 로그인 페이지로 보내기
 * - main.tsx에 한번만 선언할 거라면 HoC로 하는건 어떨까
 */

export default function useProtectRoute() {
  const { identification, logout } = useAuthStore();
  const navigate = useNavigate();

  const isAuthenticated = !!identification;

  useEffect(() => {
    if (!isAuthenticated) {
      logout();
      navigate("/");
    }
  }, [isAuthenticated, logout, navigate]);

  return null;
}
