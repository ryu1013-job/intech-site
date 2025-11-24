import { twMerge } from "tailwind-merge"

interface ContainerProps extends React.ComponentProps<"div"> {
  constrained?: boolean
}

const Container = ({ className, constrained = false, ref, ...props }: ContainerProps) => (
  <div
    className={twMerge(
      "mx-auto w-full max-w-3xl [--container-padding:--spacing(4)]",
      constrained ? "sm:px-(--container-padding)" : "px-(--container-padding)",
      className,
    )}
    {...props}
    ref={ref}
  />
)

export type { ContainerProps }
export { Container }
