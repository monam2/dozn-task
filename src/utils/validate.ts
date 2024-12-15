/**
 * 유효성 검증 관련 함수 관리
 *
 * - 각 함수를 따로 관리해 유효성 검증 요소 확장에 대비
 */

/** 아이디 유효성 검사 */
export const validateId = (id: string): string | undefined => {
  if (!id) {
    return "아이디를 입력해주세요.";
  }
};

/** 비밀번호 유효성 검사 */
export const validatePassword = (password: string): string | undefined => {
  if (!password) {
    return "비밀번호를 입력해주세요.";
  }
};
