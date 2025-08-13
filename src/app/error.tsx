'use client'; // 반드시 클라이언트 컴포넌트로 만들어야 해요!

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string }; // 에러 객체
  reset: () => void; // 에러를 리셋하는 함수
}

export default function Error({ error, reset }: ErrorProps) {
  // 에러가 발생했을 때 로그를 남겨두면 디버깅에 도움이 돼요
  useEffect(() => {
    console.error('페이지 에러 발생:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pb-[80px]">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          {/* 에러 아이콘 */}
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">앗! 문제가 발생했어요</h1>

        <p className="text-gray-600 mb-6">예상치 못한 오류가 발생했습니다. 다시 시도해보세요.</p>

        {/* 개발 환경에서만 에러 메시지 표시 */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-700 font-mono">{error.message}</p>
          </div>
        )}

        <div className="space-y-3">
          {/* 다시 시도 버튼 */}
          <button
            onClick={reset}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            다시 시도하기
          </button>

          {/* 홈으로 가기 버튼 */}
          <button
            onClick={() => (window.location.href = '/')}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}
