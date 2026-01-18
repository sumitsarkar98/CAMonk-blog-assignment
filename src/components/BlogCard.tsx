import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";

interface Blog {
  id: string;
  title: string;
  description: string;
  date: string;
  coverImage: string;
  category: string[];
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div className="blog-card w-full border  rounded-md p-4 flex flex-col justify-between items-start bg-white hover:bg-violet-100">
      <div>
        <div className="card-heading">{blog.title}</div>
        <div className="card-tags flex gap-3 flex-wrap py-1">
          {blog.category.map((tag) => (
            <div
              key={tag}
              className="px-2 py-1 text-violet-950 bg-violet-200 rounded"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div className="card-body text-gray-500 ms-1 mb-2">
        {blog.description}
      </div>

      <Link
        to={`/blog/${blog.id}`}
        className="blog-link flex items-center self-end"
      >
        <span>show details</span>
        <HiArrowLongRight className="ms-1" />
      </Link>
    </div>
  );
};

export default BlogCard;
