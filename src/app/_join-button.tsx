import { ChevronRight } from "lucide-react"
import { AnimatedGradientText } from "~/components/ui/animated-gradient-text"

import { cn } from "~/lib/utils"

export function JoinButton() {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSftG0jao8Q8WxnwCipkPQR7a6z_x_4aFGvz9Z0MRXeHmaFSDA/viewform?usp=publish-editor"
      target="_blank"
      className="group fixed bottom-10 left-1/2 z-50 flex -translate-x-1/2 items-center justify-center rounded-full bg-white/50 backdrop-blur-sm px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]"
    >
      <span
        className={cn(
          "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-linear-to-r from-[#5ee9b5]/50 via-[#ed6aff]/50 to-[#5ee9b5]/50 bg-size-[300%_100%] p-px"
        )}
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "subtract",
          WebkitClipPath: "padding-box",
        }}
      />
      <AnimatedGradientText className="font-bold text-center">
        <p>
          InTechに興味がでましたか？
        </p>
        <p>
          まずはカジュアルにお話ししましょう！
        </p>
      </AnimatedGradientText>
      <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
    </a>
  )
}
