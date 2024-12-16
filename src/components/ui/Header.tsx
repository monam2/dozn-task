import BaseButton from "../common/BaseButton";
import useAuthStore from "@/store/auth";
import { useLocation, useNavigate } from "react-router";

export default function Header() {
  const { identification, logout } = useAuthStore();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="h-[100px] bg-white flex justify-between items-center px-[15px]">
      <div className="flex items-center justify-start gap-16 w-full">
        <h1
          onClick={() => navigate("/list")}
          className="text-heading-2 text-primary font-sans font-extrabold cursor-pointer"
        >
          Octover
        </h1>
        <nav className="flex justify-center items-center gap-12 pt-4">
          <h3
            onClick={() => navigate("/list")}
            className={`text-content-1 font-semibold cursor-pointer hover:text-primary ${pathname === "/list" && "text-primary"}`}
          >
            API 목록
          </h3>
          <h3
            onClick={() => navigate("/history")}
            className={`text-content-1 font-semibold cursor-pointer hover:text-primary ${pathname === "/history" && "text-primary"}`}
          >
            호출 내역
          </h3>
        </nav>
      </div>

      {identification ? (
        <BaseButton onClick={handleLogout} color="primary" size="md">
          로그아웃
        </BaseButton>
      ) : (
        <BaseButton onClick={handleLogin} color="primary" size="md">
          로그인
        </BaseButton>
      )}
    </div>
  );
}
