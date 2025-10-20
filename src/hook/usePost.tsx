import { Post } from "@/generated/prisma";
import { useEffect, useState } from "react";

export const usePost = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch("http://localhost:3000/api/posts");
    const data = await res.json();
    setPosts(data);
  };

  return { posts };
};
