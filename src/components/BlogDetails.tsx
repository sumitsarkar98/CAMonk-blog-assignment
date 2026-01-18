import { useParams } from "react-router-dom";
import blogData from "@/api/data.json";
import { FaLink } from "react-icons/fa";
import type { Blog } from "@/api/types";

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();

  // Convert id param from string to number
  const blogId = Number(id);

  // Map JSON to typed Blog array, ensure id is number
  const blogs: Blog[] = blogData.blogs.map((b) => ({
    ...b,
    id: Number(b.id),
  }));

  // Find the blog by numeric id
  const blog = blogs.find((b) => b.id === blogId);

  // Copy link handler
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  if (!blog) {
    return (
      <div className="p-6 text-center text-red-500">
        <h2 className="text-xl font-semibold">Blog not found</h2>
      </div>
    );
  }

  return (
    <div className="p-0 lg:p-4">
      {/* Title */}
      <h1 className="blog-title text-2xl text-center lg:text-start md:text-4xl font-semibold lg:ms-4 mb- lg:mb-6">
        {blog.title}
      </h1>

      {/* Cover Image */}
      <section className="w-full h-50 lg:h-100 overflow-hidden rounded mb-2 lg:mb-6">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </section>

      {/* blog-tags */}
      <div className="card-tags flex gap-3 flex-wrap py- mb-4">
        {blog.category.map((tag) => (
          <div
            key={tag}
            className="px-2 py-1 text-violet-950 bg-violet-200 rounded"
          >
            {tag}
          </div>
        ))}
      </div>

      {/* Meta */}
      <div className="blog-meta flex justify-center">
        <div className="w-full max-w-4xl self-center rounded-lg px-1 py-3 lg:p-4 flex lg:gap-4 flex-row sm:items-center sm:justify-between bg-gray-100 mb-6">
          {/* Category */}
          <section className="border-gray-300">
            <h6 className="text-xs md:text-sm font-semibold uppercase">
              Category
            </h6>
            <div className="text-[0.6rem] md:text-xs meta-cat text-gray-600">
              {blog.category.join("/")}
            </div>
          </section>

          {/* Divider */}
          <div className="block h-10 w-px bg-gray-400" />

          {/* Read time */}
          <section>
            <h6 className="text-xs md:text-sm font-semibold uppercase">
              Read time
            </h6>
            <span className="text-xs text-gray-600">5 mins</span>
          </section>

          {/* Divider */}
          <div className="block h-10 w-px bg-gray-400" />

          {/* Date */}
          <section>
            <h6 className="text-xs md:text-sm font-semibold uppercase">Date</h6>
            <span className="text-xs text-gray-600">
              {new Date(blog.date).toLocaleDateString()}
            </span>
          </section>
        </div>
      </div>

      {/* Content */}
      <p className="px-2 text-md text-gray-700 leading-relaxed whitespace-pre-line">
        {blog.content}
      </p>

      {/* Copy link */}
      <div className="flex justify-end">
        <button
          onClick={copyLink}
          className="py-2 px-4 bg-violet-400 text-violet-900 rounded hover:bg-violet-300 flex items-center gap-2 transition-colors"
        >
          <FaLink /> copy link
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
