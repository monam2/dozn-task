import { ReactNode } from "react";
import { QueryProvider } from "./QueryProvider";
import RouteProivder from "./RouteProivder";

/**
 * 전역 Provider 관리 컴포넌트
 *
 * - 각 Provider를 독립적 파일로 관리 후 Provider 단일 컴포넌트만 사용할 수 있도록 관리
 *
 * 순서
 * 1. 리액트 쿼리 관련 프로바이더
 * 2. 리액트 라우터 관련 프로바이더
 */

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <RouteProivder>{children}</RouteProivder>
    </QueryProvider>
  );
}
