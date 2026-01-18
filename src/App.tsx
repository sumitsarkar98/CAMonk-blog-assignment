import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import BlogDetails from "./components/BlogDetails";
import blogData from "@/api/data.json";
import BlogCreate from "./pages/BlogCreate";

const App = () => {
  const defaultBlogId = blogData.blogs[0].id;

  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />}>
            <Route
              index
              element={<Navigate to={`blog/${defaultBlogId}`} replace />}
            />
            <Route path="blog/:id" element={<BlogDetails />} />
          </Route>
          <Route path="/blog-post" element={<BlogCreate />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
