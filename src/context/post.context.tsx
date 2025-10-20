import { Post } from "@/generated/prisma";
import { createContext, useState } from "react";

interface PostContextType {
  posts: Post[];
  fetchPosts: () => Promise<void>;
  deletePost: (id: string) => Promise<void>;
}

const PostContext = createContext<PostContextType>({
  posts: [],
  fetchPosts: async () => {},
  deletePost: async () => {},
});

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
};
