import { ComponentProps, forwardRef } from "react";

type Props = ComponentProps<"input"> & {
  className?: string;
};

const Input = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const { className, ...rest } = props;

  return (
    <input
      ref={ref}
      className={`flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none ${className}`}
      {...rest}
    />
  );
});
Input.displayName = "Input";

export default Input;
