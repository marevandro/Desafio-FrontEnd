'use client'

import { FilterContextProvider } from "@/contexts/filter-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProviderPorps {
  children: ReactNode
}

const theme = {
  desktopBreakpoint: "968px",
  tableBreakpoint: "768px"
}
export function DefatulProvider({children}: DefaultProviderPorps){
  const client = new QueryClient();
  return(
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  )
}