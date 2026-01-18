import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { FormEvent } from "react";
import type { Blog } from "@/api/types";

const BlogCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    const newBlog: Omit<Blog, "id"> = {
      title,
      description,
      category: category.split(",").map((c) => c.trim().toUpperCase()),
      coverImage,
      content,
      date: new Date().toISOString(),
    };

    try {
      const res = await fetch("http://localhost:3001/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBlog),
      });

      if (!res.ok) throw new Error("Failed to create blog");

      setSuccess("Blog created successfully!");
      alert("new blog posted");

      setTitle("");
      setDescription("");
      setCategory("");
      setCoverImage("");
      setContent("");
      setTimeout(() => navigate("/"), 500);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mt-12 mx-auto p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">Create New Blog</h1>

      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-600 mb-2">{success}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          className="border rounded px-3 py-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Short Description"
          className="border rounded px-3 py-2 w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Categories (comma separated)"
          className="border rounded px-3 py-2 w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="text"
          placeholder="Cover Image URL"
          className="border rounded px-3 py-2 w-full"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
        />

        <textarea
          placeholder="Full Content"
          className="border rounded px-3 py-2 w-full h-40"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Posting..." : "Post Blog"}
        </button>
      </form>
    </div>
  );
};

export default BlogCreate;
