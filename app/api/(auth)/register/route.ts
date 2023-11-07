import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const registerSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export function POST(
  request: NextRequest,
): NextResponse<NextExampleApiResponse> {
  return NextResponse.json({});
}
