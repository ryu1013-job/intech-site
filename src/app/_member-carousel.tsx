"use client"

import Image from "next/image"
import { Badge } from "~/components/ui/badge"
import { Card, CardContent } from "~/components/ui/card"
import { Marquee } from "~/components/ui/marquee"
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
  sns?: string
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
    sns: "https://x.com/nka21dev"
  },
  {
    name: "ねこみ",
    description: "学年関係なくおはなししてて微笑ましいなっておもう〜みんなおもしろくて優しい方々！",
    badges: ["締切とおえかきしてるひと", "言語化むずいって", "アイスを食べましょ！"],
    image: {
      src: "/member/nekomi.png",
      alt: "えぬこじの写真",
    },
    sns: "https://x.com/88_49"
  },
  {
    name: "神父",
    description: "ここはきっと、TECH.C.の梁山泊。あったかくて楽しくて、真剣になれる場所。",
    badges: ["アニメ科", "祝福する人", "メカクレ愛好家"],
    image: {
      src: "/member/shinpu.png",
      alt: "神父の写真",
    },
  },
  {
    name: "ryu",
    description:
      "ボドゲ楽しいよ！",
    badges: ["エンジニア"],
    image: {
      src: "/member/ryu.png",
      alt: "ryuの写真",
    },
    sns: "https://x.com/_ryu1013"
  },
]

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
      <Marquee pauseOnHover className="[--duration:20s]">
        {MEMBERS.map((member) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </Marquee>
      {MEMBERS.length > 5 && (
        <Marquee reverse pauseOnHover className="[--duration:20s]">
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
