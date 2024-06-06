import { Button, Html } from "@react-email/components";
import * as React from "react";

export default function HTMLtemplate() {
  return (
    <Html>
      <Button
        href="https://hsv.de"
        style={{
          background: "#d4d4d4",
          color: "#fafafa",
          padding: "12px 20px",
        }}
      >
        Click me
      </Button>
    </Html>
  );
}
