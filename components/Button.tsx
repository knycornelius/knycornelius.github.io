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
      {/* default h-[44px] px-6 */}
      {/* md h-[48px] px-6 */}
      {/* lg h-[56px] px-8 text-sm uppercase tracking-[2px] */}
      {/* icon h-10 w-10 */}

      {/* primary bg-primary text-white */}
      {/* outline border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary */}
      {children}
    </button>
  );
}
