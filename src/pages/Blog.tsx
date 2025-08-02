import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    // Redirect to salescentri.com blog
    window.location.href = "https://salescentri.com/resources/whitepapers-ebooks/?utm_source=centralvirginiaunited.com&utm_medium=blog&utm_campaign=telecom_insights";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to our blog...</h1>
        <p>If you're not redirected automatically, <a href="https://salescentri.com/resources/whitepapers-ebooks/?utm_source=centralvirginiaunited.com&utm_medium=blog&utm_campaign=telecom_insights" className="text-primary underline">click here</a>.</p>
      </div>
    </div>
  );
};

export default Blog;