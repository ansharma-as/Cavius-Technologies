import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true); 
  const limit = 9;

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
      .then((res) => {
        setPosts(res.data);
        setTotalPages(Math.ceil(100 / limit));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [page]);

  return (
    <PostContext.Provider value={{ posts, search, setSearch, page, setPage, totalPages , loading }}>
      {children}
    </PostContext.Provider>
  );
}