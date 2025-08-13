export default function Loading() {
  return (
    <div className="h-[73vh] min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative">
          <div className="w-20 h-20 border-[7px] border-gray-300 rounded-full"></div>

          <div className="absolute top-0 left-0 w-20 h-20 border-[7px] border-transparent border-t-blue-500 rounded-full animate-spin"></div>
        </div>

        <p className="text-gray-700 text-lg font-medium">페이지가 로딩 중입니다...</p>
      </div>
    </div>
  );
}
