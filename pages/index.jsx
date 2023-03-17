import Head from "next/head";
import axios from "axios";
import Default from "@/layout/default";
import AboutSimple from "@/components/aboutSimple";
import Intro from "@/components/intro";
import Team from "@/components/team";
import Video from "@/components/video";
import LatestNews from "@/components/latestNews";

export default function Home({ data, error }) {
  return (
    <>
      <Head>
        <title>Climate - Bold actions for a net zero future</title>
        <meta
          name="description"
          content="CLIMATE is an international privately owned engineering and sustainability firm providing legendary client service and smart solutions in sustainability, climate, environmental, social, and governance (ESG) and energy transition —from the A to Z. CLIMATE was founded with a commitment to maintain the enduring pursuit of excellence, putting our responsibility to our clients second only to our responsibility to the public. By being true to our promise for almost a decade, we’ve forged massive, long-standing relationships, believing responsiveness is the core of serving our clients. We invest in our people, technology and tools to find better solutions and foster careers. Whether you’re a client, employee, partner or stakeholder – trust that we’re the partners you want to be working with. We are collaborating with our clients to lead a wave of sustainable innovation and economic growth that safeguards the planet and advances sustainability practices. We are CLIMATE. "
        />
      </Head>
      <Default>
        <Intro />
        <AboutSimple />
        <Video data={data.video} />
        <Team data={data.teams} />
        <LatestNews />
      </Default>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const blogRes = await axios.get("https://climate-nextjs-mysql.vercel.app/api/blog");
    const teamRes = await axios.get("https://climate-nextjs-mysql.vercel.app/api/teams");
    const videoRes = await axios.get("https://climate-nextjs-mysql.vercel.app/api/video");
    return {
      props: {
        data: {
          blogs: blogRes?.data,
          teams: teamRes?.data,
          video: videoRes?.data,
        },
      },
    };
  } catch (err) {
    return {
      props: {
        error: err.message,
      },
    };
  }
}
