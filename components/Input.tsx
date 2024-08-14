import { ComponentProps, forwardRef } from "react";

type Props = ComponentProps<"input"> & {
  className?: string;
};

const Input = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const { className, ...rest } = props;

  return (
    <input
      ref={ref}
      className={`flex h-[48px] rounded-md border border-white/10 bg-primary px-4 py-5 text-base font-light outline-none placeholder:text-white/60 focus:border-accent ${className}`}
      {...rest}
    />
  );
});
Input.displayName = "Input";

export default Input;
