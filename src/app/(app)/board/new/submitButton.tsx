"use client";

import { ReactNode } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function SubmitButton(props: { children?: ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      {props.children}
    </button>
  );
}
