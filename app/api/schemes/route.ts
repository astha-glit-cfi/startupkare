import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Mock government schemes data
    const schemes = [
      {
        id: 1,
        name: 'Pradhan Mantri Yuva Yojana',
        ministry: 'Ministry of MSME',
        fundingAmount: 2500000,
        eligibility: 'Age 18-40, Indian citizen',
        states: ['All'],
        industries: ['All'],
        deadline: '2024-12-31',
      },
      {
        id: 2,
        name: 'Startup India Loan',
        ministry: 'SIDBI',
        fundingAmount: 1000000000,
        eligibility: 'Registered startups, less than 10 years old',
        states: ['All'],
        industries: ['All'],
        deadline: '2024-12-31',
      },
      {
        id: 3,
        name: 'MSME Emergency Credit Line',
        ministry: 'Ministry of MSME',
        fundingAmount: 300000000,
        eligibility: 'Registered MSME, GST compliance',
        states: ['All'],
        industries: ['All'],
        deadline: '2024-12-31',
      },
    ];

    return NextResponse.json({ schemes }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
