"use client";

import { Post } from "@/generated/prisma";
import postService from "@/services/post.service";
import { createContext, useEffect, useState } from "react";

interface PostContextType {
  posts: Post[];
  fetchPosts: () => Promise<void>;
  deletePost: (id: string) => Promise<void>;
  isPending: boolean;
}

export const PostContext = createContext<PostContextType>({
  posts: [],
  fetchPosts: async () => {},
  deletePost: async () => {},
  isPending: false,
});

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
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

  const deletePost = async (id: string) => {
    try {
      await postService.deletePost(id);
      fetchPosts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PostContext.Provider value={{ posts, fetchPosts, deletePost, isPending }}>
      {children}
    </PostContext.Provider>
  );
};
