'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children, ...props }: any) {
  // Isme koi extra script mat daalna, next-themes khud handle karta hai
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}