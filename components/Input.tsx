import { ComponentProps, forwardRef } from "react";

type Props = ComponentProps<"input"> & {
  className?: string;
};

const Input = forwardRef((props: Props, ref) => {
  const { className } = props;

  return (
    <input
      ref={ref}
      className={`flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none ${className}`}
      {...props}
    />
  );
});
Input.displayName = "Input";

export default Input;
