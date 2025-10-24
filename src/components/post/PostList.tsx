"use client";

import { PostContext } from "@/context/post.context";
import PostCard from "./PostCard";
import { useContext } from "react";
import PostListSkeleton from "./PostListSkeleton";

const PostList = () => {
  const { posts, isPending } = useContext(PostContext);

  return (
    <div className="container mx-auto">
      <h1>Post List Component (Nombre de post: {posts.length})</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {isPending && <PostListSkeleton />}

        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
