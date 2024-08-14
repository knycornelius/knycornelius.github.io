import { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<"button"> & {
  className?: string;
  children: ReactNode;
};

export function Button(props: Props) {
  const { className, children, type = "button", ...other } = props;

  return (
    <button
      type={type}
      className={`inline-flex select-none items-center justify-center rounded-full bg-accent px-6 py-2 text-primary hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary ${className}`}
      {...other}
    >
      {children}
    </button>
  );
}
