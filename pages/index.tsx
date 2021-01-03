import Head from "next/head";
import { fetchCategories, fetchPosts } from "../api/summary";
import Feed from "../components/Feed/Feed";
import { Category, Post } from "../shared/types";

interface FrontProps {
  posts: Post[];
  categories: Category[];
}

export async function getStaticProps() {
  const categories = await fetchCategories();
  const posts = await fetchPosts();
  return { props: { posts, categories } };
}
function index({ posts, categories }: FrontProps) {
  return (
    <>
      <Head>
        <title>Front page of internet</title>
      </Head>
      <main>
        <Feed posts={posts} categories={categories} />
      </main>
    </>
  );
}

export default index;
