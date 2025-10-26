import React, { ReactNode } from "react";
import { ThemeRegistery } from '../theme/ThemeRegistery';

const CombinedProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeRegistery>
     {children}
  </ThemeRegistery>;
};

export { CombinedProvider };