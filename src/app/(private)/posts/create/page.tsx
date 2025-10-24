import PostForm from "@/components/post/PostForm";

export default function CreatePostPage() {
  return (
    <div className="container mx-auto">
      <h1>Create Post</h1>

      <div>
        <PostForm />
      </div>
    </div>
  );
}
