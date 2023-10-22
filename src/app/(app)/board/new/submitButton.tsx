"use client";

import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

export function SubmitButton(props: { children?: ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      {props.children}
    </button>
  );
}
