"use client"

import Image from "next/image"
import { Badge } from "~/components/ui/badge"
import { Card, CardContent } from "~/components/ui/card"
import { Marquee } from "~/components/ui/marquee"
import { Skeleton } from "~/components/ui/skeleton"
import { Text } from "~/components/ui/text"
import { MEMBERS } from "~/const/menbers"

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
  <Card className="flex h-full flex-col max-w-md min-w-xs" key={name}>
    <CardContent className="flex h-full flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          {image ? (
            <Image
              className="rounded-xl border"
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
        <Text>{description}</Text>
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge key={`${name}-${badge}-${index}`} variant="outline">
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
)

export function MemberCarousel() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover>
        {MEMBERS.map((member) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </Marquee>
      {MEMBERS.length > 5 && (
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {MEMBERS.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </Marquee>
      )}
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-linear-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-linear-to-l"></div>
    </div >
  )
}
