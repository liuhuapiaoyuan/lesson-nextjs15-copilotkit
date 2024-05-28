


"use client";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import React from "react";



export default function CopilotKitProvider({children}:React.PropsWithChildren<{}>) {

  return (
    <CopilotKit runtimeUrl="/api/copilotkit">
      {children}
     
    </CopilotKit>
  );
}
