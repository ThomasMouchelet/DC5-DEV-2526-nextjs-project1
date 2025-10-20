import { Post } from "@/generated/prisma";
import postService from "@/services/post.service";
import { Trash } from "lucide-react";
import Link from "next/link";

interface PostCardProps {
  post: Post;
}
const PostCard = ({ post }: PostCardProps) => {
  const handleDelete = async () => {
    try {
      await postService.deletePost(post.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border p-4 rounded-md shadow-sm hover:shadow-md">
      <Link href={`/posts/${post.id}`}>
        <h2 className="font-bold mb-2">{post.title}</h2>
      </Link>
      <p>
        {post.content.length > 50
          ? post.content.slice(0, 50) + "..."
          : post.content}
      </p>

      <Trash onClick={handleDelete} />
    </div>
  );
};

export default PostCard;
