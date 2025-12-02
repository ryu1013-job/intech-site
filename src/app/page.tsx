import { Section } from "~/components/section";
import { Container } from "~/components/ui/container";
import { Heading } from "~/components/ui/heading";
import { Skeleton } from "~/components/ui/skeleton";
import ClickSpark from "~/components/ClickSpark";
import { SparklesText } from "~/components/ui/sparkles-text";
import { Text } from "~/components/ui/text";
import { MemberCarousel } from "./_member-carousel";
import { RoundedPieChart } from "./_member-pie-chart";

export default function Home() {
  return (
    <ClickSpark
      sparkColor='#000'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <Container>
        <main className="min-h-screen font-sans flex flex-col p-4 py-7 sm:p-16 gap-8">
          <SparklesText className="text-4xl" sparklesCount={6}>InTech</SparklesText>
          <Section>
            <Heading level={2}>InTechって何？</Heading>
            <Text>TECH.C.の様々な学年や専攻のメンバーが集まり、互いに良い刺激を与え合う、フラットで関わりやすいコミュニティです。お互いを尊重し合える仲間と出会え、学校生活がもっと楽しくなります。</Text>
          </Section>
          <Section>
            <Heading level={2}>何をしてる？</Heading>
            <Skeleton className="w-full h-40 bg-foreground/10 grid place-items-center">@ito</Skeleton>
          </Section>
          <Section>
            <Heading level={2}>どんな人がいる？</Heading>
            <MemberCarousel />
            <Heading level={3}>メンバー構成</Heading>
            <RoundedPieChart />
          </Section>
          <Section>
            <Heading level={2}>何をしてきた？</Heading>
            <Skeleton className="w-full h-40 bg-foreground/10 grid place-items-center">@ito</Skeleton>
          </Section>
          {/* <JoinButton /> */}
        </main>
      </Container>
    </ClickSpark >
  );
}
