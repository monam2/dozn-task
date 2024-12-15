import BaseButton from "../common/BaseButton";
import useAuthStore from "@/store/auth";
import { useNavigate } from "react-router";

export default function Header() {
  const { identification, logout } = useAuthStore();
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
      <h1
        onClick={() => navigate("/list")}
        className="text-heading-2 text-primary font-sans font-extrabold cursor-pointer"
      >
        Octover
      </h1>
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
