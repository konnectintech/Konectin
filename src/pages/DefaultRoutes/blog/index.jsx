import { Outlet, useNavigate, useParams } from "react-router-dom";
import CTASection from "./cta";
import "./index.css";
import { useEffect } from "react";

function Blog() {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.feed === undefined) {
      navigate("/blog/all");
    }
  }, [params, navigate]);

  return (
    <main className="bg-neutral-900">
      <section className="w-11/12 mx-auto max-w-screen-lg flex flex-col gap-16 items-center">
        <Outlet />
        <CTASection />
      </section>
    </main>
  );
}

export default Blog;
