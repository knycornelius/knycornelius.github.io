import { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<"button"> & {
  className?: string;
  children: ReactNode;
};

export function Button(props: Props) {
  const { className, children, ...other } = props;

  return (
    <button
      className={`bg-accent hover:bg-accent-hover text-primary rounded-full px-6 py-2 inline-flex items-center justify-center select-none ${className}`}
      {...other}
    >
      {children}
    </button>
  );
}
