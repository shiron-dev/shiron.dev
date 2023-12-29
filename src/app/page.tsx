"use client";
import "./index.css";
import { SkillStack } from "./_components/SkillStack";
import { LinkButton } from "./_components/LinkButton";
import { EmailButton } from "./_components/EmailButton";
import { RecaptchaProvider } from "./_components/RecaptchaContext";

export default async function Home(): Promise<JSX.Element> {
  return (
    <main className="p-24">
      <div className="text-center">
        <h2 className="my-1 text-4xl">shiron4710</h2>
        <h3>Student engineers interested in diverse areas</h3>
        <div>
          フロントエンド、サーバーサイド、インフラに興味があり、
          最新の技術を追い続ける技術愛好家な学生エンジニア。
        </div>
      </div>
      <div>
        <h3>About</h3>
        <div className="my-4 ml-6 text-xl">
          <div>@shiron4710</div>
          <div className="mt-3">
            私は様々な言語での開発経験があり、フロントエンド、サーバーサイド、インフラなどの様々な分野に興味があります。また、最新の技術に興味を持ち、常に学習し続けています。
            設計やコーディングが好きで常に個人開発や、共同開発を進めています。
          </div>
        </div>
      </div>
      <div>
        <h3>Skills</h3>
        <div className="ml-6">
          <SkillStack
            category="Languages"
            skills={["C++", "C#", "Java", "Kotlin", "JavaScript/TypeScript"]}
          />
          <SkillStack category="Front-end" skills={["React", "Next.js"]} />
          <SkillStack
            category="Back-end"
            skills={[
              "Next.js",
              "Spring Boot",
              "Express",
              "Databases(MySQL,SQLite,PostgreSQL)",
            ]}
          />
          <SkillStack
            category="Infrastructure"
            skills={[
              "Cloud(AWS,Azure,GCP,OCI)",
              "Container(Docker,Kubernetes)",
              "Data Store(Ceph)",
              "Network(LB,CDN)",
              "Monitoring(Prometheus, Grafana)",
            ]}
          />
          <SkillStack
            category="Others"
            skills={[
              "CI/CD(GitHub Actions, CircleCI, Jenkins)",
              "Android",
              "Unity",
              "Blender",
            ]}
          />
        </div>
      </div>
      <div>
        <h3>Links</h3>
        <div className="links ml-6">
          <LinkButton
            icon="simple-icons:github"
            name="@shiron4710"
            href="https://github.com/shiron4710"
          />
          <LinkButton
            icon="simple-icons:twitter"
            name="@shiron4710"
            href="https://twitter.com/shiron4710"
          />
          <LinkButton
            icon="simple-icons:twitter"
            name="@shiron4710dev"
            href="https://twitter.com/shiron4710dev"
          />
          <LinkButton
            icon="simple-icons:discord"
            name="shiron#2622"
            href="https://discord.com/"
          />
          <LinkButton
            icon="simple-icons:wantedly"
            name="shiron4710"
            href="https://www.wantedly.com/id/shiron4710"
          />
          <RecaptchaProvider>
            <EmailButton email="main" />
            <EmailButton email="dev" />
          </RecaptchaProvider>
        </div>
      </div>
    </main>
  );
}
