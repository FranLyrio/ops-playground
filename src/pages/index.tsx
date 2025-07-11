import Head from "next/head";
import { Heading } from "@/components/Heading/Heading";
import { Text } from "@/components/Text/Text";

export default function Home() {
  return (
    <>
      <Head>
        <title>OpsPlayground</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div>
        <Heading>OpsPlayground</Heading>
        <Text>Projeto experimental para aplicar na prática conceitos de DevOps, incluindo pipelines com GitHub Actions, conteinerização com Docker, orquestração com Kubernetes e monitoramento.</Text>
      </div>
    </>
  );
}
