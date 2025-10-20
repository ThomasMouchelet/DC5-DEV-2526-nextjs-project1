"use client";

import { usePost } from "@/hook/usePost";
import PostCard from "./PostCard";

const PostList = () => {
  const { posts } = usePost();

  return (
    <div className="container mx-auto">
      <h1>Post List Component</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
