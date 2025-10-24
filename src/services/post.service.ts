import { PostDTO } from "@/types/post.type";

const fetchPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const data = await res.json();
  return data;
};

const fetchPostById = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
  const data = await res.json();
  return data;
};

const deletePost = async (id: string) => {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`, {
    method: "DELETE",
  });
};

const createPost = async (postDTO: PostDTO) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postDTO),
  });
  return response.json();
};

const postService = {
  fetchPosts,
  fetchPostById,
  deletePost,
  createPost,
};

export default postService;
