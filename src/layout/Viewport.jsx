import React from "react";
import { IdentityView } from "../modules/identity/IdentityView.jsx";

export function Viewport({ current }) {
  return (
    <>
      {current === "identity" && <IdentityView />}
    </>
  );
}
