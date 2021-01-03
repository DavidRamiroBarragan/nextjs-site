import React, { FunctionComponent } from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Post as PostType } from "../../../shared/types";
import { fetchPost } from "../../../api/post";
import { Loader } from "../../../components/Loader/Loader";
import { PostBody } from "../../../components/Post/PostBody";
import { postPaths as paths } from "../../../shared/staticPaths";

interface PostProps {
  post: PostType;
}

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  if (typeof params.id !== "string") throw new Error("Unexpected id");
  const post = await fetchPost(params.id);
  return { props: { post } };
};

export async function getStaticPaths() {
  return { paths, fallback: true };
}

const Post: FunctionComponent<PostProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) return <Loader />;
  return <PostBody post={post} />;
};

export default Post;
