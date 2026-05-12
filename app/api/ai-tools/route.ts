import { NextResponse } from 'next/server';

// Mock AI tools - In production, integrate with actual AI services like OpenAI
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, input } = body;

    if (!type || !input) {
      return NextResponse.json(
        { error: 'Missing type or input' },
        { status: 400 }
      );
    }

    let content = '';

    switch (type) {
      case 'pitch':
        content = generateMockPitch(input);
        break;
      case 'validator':
        content = generateMockValidation(input);
        break;
      case 'business-plan':
        content = generateMockBusinessPlan(input);
        break;
      default:
        throw new Error('Invalid tool type');
    }

    return NextResponse.json(
      {
        content,
        type,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

function generateMockPitch(input: any): string {
  return `
# Pitch Deck: ${input.title || 'Your Startup'}

## Problem
${input.problemStatement || 'Identify a key market problem'}

## Solution
${input.solution || 'Present your innovative solution'}

## Target Market
${input.targetMarket || 'Define your target customer'}

## Business Model
Revenue streams: SaaS, Freemium, B2B
Pricing: To be determined

## Financial Projections
- Year 1: $100K ARR
- Year 2: $500K ARR
- Year 3: $2M ARR

## Team & Execution
Strong founding team with relevant experience

## Funding Ask
$500K seed round for product development and market expansion
  `;
}

function generateMockValidation(input: any): string {
  return `
# Idea Validation Report

## Idea Assessment
**Startup:** ${input.title || 'Your Idea'}

**Market Size:** Large TAM (Addressable Market)
**Competition:** Moderate competition level
**Differentiation:** Clear unique value proposition

## Validation Score: 7.5/10

### Strengths
✓ Clear problem statement
✓ Existing market validation
✓ Scalable business model
✓ Strong value proposition

### Areas to Improve
⚠ Need customer interviews
⚠ Competitive analysis depth
⚠ Go-to-market strategy clarity

## Recommendations
1. Conduct 20+ customer interviews
2. Build MVP within 3 months
3. Focus on unit economics
4. Define clear KPIs
  `;
}

function generateMockBusinessPlan(input: any): string {
  return `
# Business Plan: ${input.title || 'Your Startup'}

## Executive Summary
A comprehensive plan for building and scaling your startup business.

## Company Description
${input.description || 'Describe your company mission and vision'}

## Market Analysis
- Target Market: Indian startups and entrepreneurs
- Market Size: $10B+ opportunity
- Growth Rate: 30% YoY

## Marketing & Sales Strategy
- Customer Acquisition Cost: $100-200
- Lifetime Value: $5000+
- Sales Channels: Direct, Self-service, Enterprise

## Financial Projections
- Operating Costs: $50K/month
- Break-even: Month 18
- Profitability: Year 2

## Implementation Timeline
- Q1: Product refinement, Funding
- Q2: Market launch, Customer acquisition
- Q3: Scale & optimization
- Q4: Series A preparation
  `;
}
