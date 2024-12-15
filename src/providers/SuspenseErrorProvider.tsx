import { ReactNode, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

/**
 * !!굳이 필요하지 않다. 따로 에러처리 없이 로그인 페이지로 리다이렉트하면 됨.
 *
 * Error Boundary와 Suspense를 관리하는 Provider
 *
 *
 * ErrorBoundary - fallback이 아닌 FallBackComponent를 사용하면 에러 메시지를 받아올 수 있음
 * => error, resetErrorBoundary(렌더링 제시도)
 */

function ErrorTempComponents({ error }: { error: Error }) {
  return <div>에러 발생... {error.message}</div>;
}

function LoadingTempComponents() {
  return <div>Loading...</div>;
}

export default function SuspenseErrorProvider({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorTempComponents}>
      <Suspense fallback={<LoadingTempComponents />}>{children}</Suspense>
    </ErrorBoundary>
  );
}
