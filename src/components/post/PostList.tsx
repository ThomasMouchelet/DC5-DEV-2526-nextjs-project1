"use client";

import { PostContext } from "@/context/post.context";
import PostCard from "./PostCard";
import { useContext } from "react";
import { Skeleton } from "../ui/skeleton";

const PostList = () => {
  // call state post from context
  const { posts, isPending } = useContext(PostContext);

  return (
    <div className="container mx-auto">
      <h1>Post List Component</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {isPending && (
          <>
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          </>
        )}

        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
