"use client";

import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import React from "react";
import { PostDTO } from "@/types/post.type";
import postService from "@/services/post.service";
import { redirect } from "next/navigation";

function FormError({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-red-600">{children}</p>;
}

export default function PostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostDTO>();

  const onSubmit = async (data: PostDTO) => {
    try {
      const post = await postService.createPost(data);
      console.log("Post created successfully", post);
    } catch (error) {
      console.error("Failed to create post:", error);
    } finally {
      redirect("/posts");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <Input
        placeholder="Post Title"
        {...register("title", { required: true })}
      />
      {errors.title && <FormError>This field is required</FormError>}

      <Textarea
        placeholder="Post Content"
        {...register("content", { required: false, minLength: 10 })}
      />
      {errors.content && (
        <FormError>Content must be at least 10 characters</FormError>
      )}

      <Button type="submit" className="w-full">
        Create Post
      </Button>
    </form>
  );
}
