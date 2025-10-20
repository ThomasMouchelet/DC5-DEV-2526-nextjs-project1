import { Post } from "@/generated/prisma";
import postService from "@/services/post.service";
import { useEffect, useState } from "react";

export const usePost = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await postService.fetchPosts();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  return { posts };
};
