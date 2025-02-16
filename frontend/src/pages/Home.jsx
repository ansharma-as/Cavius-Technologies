import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { Link } from "react-router-dom";

function Home() {
  const { posts, search, setSearch, page, setPage, totalPages , loading } = useContext(PostContext);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <input
        type="text"
        placeholder="Search posts..."
        className="p-2 border-2 rounded-xl w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="p-4 border-2 border-gray-400 rounded-2xl shadow animate-pulse">
              <div className="h-10 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mt-2"></div>
            </div>
          ))}
        </div>
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredPosts.map((post) => (
          <div key={post.id} className="p-4 border-2 border-gray-600 rounded-2xl shadow">
            <h3 className="text-lg font-bold">{post.title}</h3>
            <p>{post.body.substring(0, 100)}...</p>
            <Link to={`/item/${post.id}`} className="text-white mt-2 block bg-blue-500 w-fit pl-2 pr-2 p-1 rounded hover:bg-blue-600">
              Read More
            </Link>
          </div>
        ))}
      </div>)}

      <div className="flex justify-center mt-4 space-x-4">
        <button
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2">Page {page} of {totalPages}</span>
        <button
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
