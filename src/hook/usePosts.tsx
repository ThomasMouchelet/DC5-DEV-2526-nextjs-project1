import { Post } from "@/generated/prisma";
import postService from "@/services/post.service";
import { useEffect, useState } from "react";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setIsPending(true);
    try {
      const data = await postService.fetchPosts();
      setPosts(data);
      setIsPending(false);
    } catch (error) {
      console.error(error);
      setIsPending(false);
    }
  };

  return { posts, fetchPosts, setPosts, isPending };
};
