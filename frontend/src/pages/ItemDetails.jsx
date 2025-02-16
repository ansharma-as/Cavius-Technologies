import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ItemDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
      setPost(res.data);
    });
  }, [id]);

  if (!post) return (
    <div className="p-6 mt-20 border m-10 border-gray-400 rounded-2xl">
        <div className="animate-pulse">
            <div className="h-6 bg-gray-300 rounded w-2/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
    </div>
  );

  return (
    <div className="p-6 mt-20 m-10 border border-gray-400 rounded-2xl">
      <h2 className="text-3xl font-bold text-blue-400">{post.title}</h2>
      <p className="text-gray-700">{post.body}</p>
    </div>
    
  );
}

export default ItemDetails;