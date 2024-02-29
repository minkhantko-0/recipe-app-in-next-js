"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ children }) {
  const { pending } = useFormStatus();

  return <button>{pending ? "Submitting..." : children}</button>;
}
