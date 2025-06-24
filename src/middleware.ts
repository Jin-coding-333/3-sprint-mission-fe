import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // TODO: 로그인 검사, 악성 봇 차단 기능 설정
  return NextResponse.next();
}
