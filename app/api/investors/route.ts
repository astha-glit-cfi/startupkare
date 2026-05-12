import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Mock investor data
    const investors = [
      {
        id: 1,
        name: 'Sequoia Capital India',
        focus: 'B2B SaaS',
        checkSize: [500000, 5000000],
        portfolio: 20,
        logo: '🎯',
      },
      {
        id: 2,
        name: 'Accel',
        focus: 'Enterprise',
        checkSize: [1000000, 10000000],
        portfolio: 15,
        logo: '🚀',
      },
      {
        id: 3,
        name: 'Bessemer Venture Partners',
        focus: 'Deep Tech',
        checkSize: [2000000, 15000000],
        portfolio: 12,
        logo: '⚙️',
      },
    ];

    return NextResponse.json({ investors }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
