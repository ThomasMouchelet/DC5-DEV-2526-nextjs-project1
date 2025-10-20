import { Post } from "@/generated/prisma";
import Link from "next/link";

interface PostCardProps {
  post: Post;
}
const PostCard = ({ post }: PostCardProps) => {
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
    </div>
  );
};

export default PostCard;
