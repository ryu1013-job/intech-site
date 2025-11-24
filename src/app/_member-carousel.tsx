"use client"

import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useRef } from "react"
import { Badge } from "~/components/ui/badge"
import { Card, CardContent } from "~/components/ui/card"
import {
  Carousel,
  CarouselButton,
  CarouselContent,
  CarouselHandler,
  CarouselItem,
} from "~/components/ui/carousel"
import { Skeleton } from "~/components/ui/skeleton"
import { Text } from "~/components/ui/text"

type Member = {
  name: string
  description: string
  badges: string[]
  image?: {
    src: string
    alt: string
  }
}

const MEMBERS: Member[] = [
  {
    name: "やま",
    description: "誰も憚らず“自分”でいられる場所を作りたい。それが私の想い。",
    badges: ["エンジニア", "価値観ドリブン", "ラーメン好き！"],
    image: {
      src: "/member/koryu.webp",
      alt: "やまの写真",
    },
  },
  {
    name: "えぬこじ",
    description: "自分の居場所であり、みんなの居場所。",
    badges: ["創設者", "人生は流しそうめん", "出会いを大切に"],
    image: {
      src: "/member/naoki.webp",
      alt: "えぬこじの写真",
    },
  },
  {
    name: "社長",
    description: "社長からのありがたいお言葉。",
    badges: ["社長", "社長", "社長"],
  },
  {
    name: "神父",
    description: "神父からのありがたいお言葉。",
    badges: ["神父", "神父", "神父"],
  },
  {
    name: "Kenshin Okano",
    description:
      "課題と気付きに満ち、私を前に進めてくれる場。実験場であり、修練場。それがInTech。",
    badges: ["服の装い方", "本質に根ざしたデザイン", "構造志向"],
    image: {
      src: "/member/okano.webp",
      alt: "Kenshin Okanoの写真",
    },
  },
]

export function MemberCarousel() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))

  return (
    <Carousel
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      plugins={[plugin.current as any]}
      opts={{
        loop: true,
        align: "center",
      }}
      className="w-full"
    >
      <CarouselContent>
        {MEMBERS.map((member) => (
          <CarouselItem key={member.name} className="basis-4/5 sm:basis-3/5">
            <Card className="flex h-full flex-col">
              <CardContent className="flex h-full flex-col gap-4">
                <div className="flex items-center gap-3">
                  {member.image ? (
                    <Image
                      className="rounded-xl border"
                      src={member.image.src}
                      alt={member.image.alt}
                      width={60}
                      height={60}
                    />
                  ) : (
                    <Skeleton className="size-[60px] rounded-xl border bg-foreground/10" />
                  )}
                  <p className="text-lg font-semibold">{member.name}</p>
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <Text>{member.description}</Text>
                  <div className="flex flex-wrap gap-2">
                    {member.badges.map((badge, index) => (
                      <Badge key={`${member.name}-${badge}-${index}`} variant="outline">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselHandler>
        <CarouselButton segment="previous" className="cursor-pointer" />
        <CarouselButton segment="next" className="cursor-pointer" />
      </CarouselHandler>
    </Carousel>
  )
}
