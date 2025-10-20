"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const PostList = () => {
  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h1>Post List Component</h1>
      <Button>Click me</Button>
    </div>
  );
};

export default PostList;
