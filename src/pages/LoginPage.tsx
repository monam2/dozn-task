import useAuthStore from "@/store/auth";
import LoginForm from "./../components/login/LoginForm";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const { identification } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (identification) {
      navigate("/list");
    }
  }, [identification, navigate]);

  return (
    <div className="flex w-full min-h-[900px] justify-center items-start">
      <LoginForm />
    </div>
  );
}
