import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

/**
 * 로그인 관련 정보를 전역으로 관리하는 store
 *
 * Auth 타입 : AccessTokenPayload에서 필요한 값들을 추가해 사용
 */
type Auth = {
  accessToken: AccessToken;
} & Pick<AccessTokenPayload, "apiKey" | "exp" | "identification">;

interface AuthStore {
  accessToken: AccessToken | null;
  apiKey: string | null;
  exp: string | null;
  identification: string | null;
  login: (auth: Auth) => void;
  logout: VoidFunction;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      accessToken: null,
      apiKey: null,
      exp: null,
      identification: null,
      login: (auth: Auth) =>
        set({
          accessToken: auth.accessToken,
          apiKey: auth.apiKey,
          exp: auth.exp,
          identification: auth.identification,
        }),
      logout: () =>
        set({
          accessToken: null,
          apiKey: null,
          exp: null,
          identification: null,
        }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useAuthStore;
