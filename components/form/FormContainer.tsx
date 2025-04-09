"use client";

// for reaction 18 and <
//import { useFormState } from "react-dom";
import { useActionState } from "react";
import { ReactNode, useEffect } from "react";
import { toast } from "sonner";
import { actionFunction } from "@/utils/types";

const initialState = {
  message: "",
};

export default function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: ReactNode;
}) {
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast.info(state.message);
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}
