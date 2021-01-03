import Head from "next/head";
import Feed from "../components/Feed/Feed";

function index() {
  return (
    <>
      <Head>
        <title>Front page of internet</title>
      </Head>
      <main>
        <Feed />
      </main>
    </>
  );
}

export default index;
