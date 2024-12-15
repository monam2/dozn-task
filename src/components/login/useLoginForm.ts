import { ChangeEvent, FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { validateId, validatePassword } from "@/utils/validate";
import { postLoginByIdPw } from "@/services";
import { decodeJwt } from "@/utils/decodeJwt";
import useAuthStore from "@/store/auth";
import { useNavigate } from "react-router";

/**
 *  로그인 요청 시 뮤테이션 호출
 *  - 성공 시 : 로그인 및 토큰 decode 정보 저장
 *  - 실패 시 : 에러 메시지 반환
 *
 *  토큰을 어디에 저장하는게 좋을까.
 *  - 쿠키 vs 전역상태 + 세션 스토리지
 *  - 쿠키에 저장하면 maxAge로 만료 시간을 검증할 수 있음. 지금은 httpOnly가 따로 설정되어 있지 않은 것 같다.
 *  - 상태로 관리하면 UI나 라우팅에 즉각 반응이 가능하다.
 *  - 우선 상태 + persist로 세션에 보관하자
 */

interface FormErrors {
  admUserId?: string;
  userPw?: string;
}

export default function useLoginForm() {
  const mutations = useMutation({
    // 로그인 요청을 위한 mutation 정의
    mutationFn: postLoginByIdPw,
  });

  const [admUserId, setAdmUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [errors, setErrors] = useState<FormErrors>({}); // 에러 메시지 객체
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuthStore(); // 토큰, 로그인 정보 저장을 위한 store
  const navigate = useNavigate();

  /**
   * 어드민 ID change 함수
   * - id가 change 될 때는 error 초기화. 이후 submit 시 검증
   */
  const handleAdmUserIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAdmUserId(e.target.value);
    setErrors((prev) => ({ ...prev, admUserId: "" }));
  };

  /**
   * 비밀번호 change 함수
   * - pw가 change 될 때는 error 초기화. 이후 submit 시 검증
   */
  const handleUserPwChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserPw(e.target.value);
    setErrors((prev) => ({ ...prev, userPw: "" }));
  };

  /**
   * 로그인 폼 유효성 검증 함수
   * - valid 함수를 통과하지 못하면 에러 객체를 생성
   * @returns 유효성 검증 통과 여부(true: 통과 => 에러가 0개)
   */
  const validateForm = () => {
    const newErrors: FormErrors = {};

    const admUserIdError = validateId(admUserId);
    if (admUserIdError) {
      newErrors.admUserId = admUserIdError;
    }

    const userPwError = validatePassword(userPw);
    if (userPwError) {
      newErrors.userPw = userPwError;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * 폼 제출 함수
   * -
   */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // 새로고침 방지

    if (!validateForm()) return;

    setIsLoading(true);

    mutations.mutate(
      { admUserId, userPw },
      {
        onSuccess: (data) => {
          const accessToken = data?.data.data.accessToken;
          const payload = decodeJwt(accessToken);
          if (!payload) return;

          const { apiKey, exp, identification } = payload;
          login({ accessToken, apiKey, exp, identification }); // authStore에 토큰 정보 저장
          setIsLoading(false);
          navigate("/list");
        },
        onError: (error) => {
          console.error("로그인 실패", error);
          setErrors((prev) => ({ ...prev, admUserId: "다시 시도해주세요." }));
          setIsLoading(false);
        },
      },
    );
  };

  return {
    admUserId,
    userPw,
    errors,
    isLoading,
    validateForm,
    handleAdmUserIdChange,
    handleUserPwChange,
    handleSubmit,
  };
}
