"use client";

import { Post } from "@/generated/prisma";
import postService from "@/services/post.service";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SinglePostPage = () => {
  const params = useParams();
  const id = params.id as string;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetchOnePost(id);
  }, [id]);

  const fetchOnePost = async (id: string) => {
    try {
      const data = await postService.fetchPostById(id);
      setPost(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">{post?.title}</h1>
      <p className="text-gray-500">{post?.content}</p>
    </div>
  );
};

export default SinglePostPage;
