import { PostContext } from "@/context/post.context";
import { Post } from "@/generated/prisma";
import { Trash } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

interface PostCardProps {
  post: Post;
}
const PostCard = ({ post }: PostCardProps) => {
  const { deletePost } = useContext(PostContext);

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

      <Trash
        onClick={() => deletePost(post.id)}
        className="cursor-pointer text-red-400 hover:text-red-600 mt-4 translate-all"
      />
    </div>
  );
};

export default PostCard;
