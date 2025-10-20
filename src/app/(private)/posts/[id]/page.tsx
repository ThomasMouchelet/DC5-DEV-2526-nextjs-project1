"use client";

import { useParams } from "next/navigation";

const SinglePostPage = () => {
  const params = useParams();
  const id = params.id as string;

  // create useEffect
  // create request to call api
  // show data

  return (
    <div>
      <h1>Post</h1>
    </div>
  );
};

export default SinglePostPage;
