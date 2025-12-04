"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "~/components/ui/badge"
import { Card, CardContent } from "~/components/ui/card"
import { Marquee } from "~/components/ui/marquee"
import { Skeleton } from "~/components/ui/skeleton"
import { MEMBERS } from "~/const/menbers"
import { cn } from "~/lib/utils"

type Member = {
  name: string
  description: string
  badges: string[]
  image?: {
    src: string
    alt: string
  }
  sns?: string
}

const MemberCard = ({ name, description, badges, image, sns }: Member) => (
  <Card className="flex h-full flex-col max-w-md sm:min-w-xs bg-background" key={name}>
    <CardContent className="flex h-full flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          {image ? (
            <Image
              className="rounded-2xl border"
              src={image.src}
              alt={image.alt}
              width={60}
              height={60}
            />
          ) : (
            <Skeleton className="size-[60px] rounded-xl border bg-foreground/10" />
          )}
          <p className="text-lg font-semibold">{name}</p>
        </div>
        {sns && (
          <a href={sns} target="_blank" rel="noopener noreferrer">
            <Image
              src="/x.png"
              alt="X Logo"
              width={16}
              height={16}
            />
          </a>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <p className="text-xs/6">{description}</p>
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge
              key={`${name}-${badge}-${index}`}
              variant="outline"
              className={cn(index >= 2 && "hidden sm:inline-flex")}
            >
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
)

export function MemberCarousel() {
  const [isTouching, setIsTouching] = useState(false)

  const handleTouchStart = () => setIsTouching(true)
  const handleTouchEnd = () => setIsTouching(false)

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee
        pauseOnHover
        className={cn(
          "marquee-scroll overflow-x-auto sm:overflow-hidden touch-pan-x",
          "[-webkit-overflow-scrolling:touch]"
        )}
        data-touching={isTouching}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        {MEMBERS.map((member) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </Marquee>
      <div className="hidden sm:block">
        {MEMBERS.length > 5 && (
          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {MEMBERS.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </Marquee>
        )}
      </div>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-linear-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-linear-to-l"></div>
    </div >
  )
}
