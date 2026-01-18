import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import BlogCard from "@/components/BlogCard";
import type { Blog } from "@/api/types.ts";

const fetchBlogs = async (): Promise<Blog[]> => {
  const res = await fetch("http://localhost:3001/blogs");

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json(); // plain JSON
};

const Home = () => {
  const { data, isLoading, isError, error } = useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  return (
    <div className="home-page bg-gray-100">
      {/* page heading */}
      <div className="flex flex-col items-center justify-center h-[25vh] md:h-[40vh] lg:h-[30vh] text-center gap-2 md:gap-3 lg:gap-4 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl heading font-semibold">
          CA Monk Blogs
        </h1>
        <p className="text-sm md:text-xl text-muted-foreground max-w-3xl">
          Stay updated with the latest trends in finance, accounting, and career
          growth.
        </p>
      </div>

      {/* page content */}
      <div className="flex flex-col lg:flex-row px-2 lg:px-4 pb-10">
        {/* Sidebar */}
        <aside className="py-2 md:p-4 lg:w-1/4">
          <h3 className="font-semibold capitalize text-xl text-gray-500 mb-2 lg:mb-3 underline underline-offset-3">
            latest articles
          </h3>

          {isLoading && (
            <p className="text-sm text-gray-500">Loading blogs...</p>
          )}

          {isError && (
            <p className="text-sm text-red-500">{(error as Error).message}</p>
          )}

          <ul className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto h-[35vh] lg:h-[80vh] lg:pe-4">
            {data?.map((blog) => (
              <li
                key={blog.id}
                className="min-w-65 lg:min-w-0 w-full flex justify-center"
              >
                <BlogCard blog={blog} />
              </li>
            ))}
          </ul>
        </aside>

        {/* Main content */}
        <section className="lg:w-3/4 py-4 px-2 lg:p-4 border rounded-sm bg-white">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Home;
