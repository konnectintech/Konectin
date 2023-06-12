import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BlogCard from "../../../../components/blogCard";
import Pagination from "../../../../components/pagination";
import "../index.css";
import Share from "./share";
import BlogComment from "./comments";

function BlogContent() {
  const [blog, setBlog] = useState({});
  const [isLoading, setLoading] = useState({ post: true, related: true });
  const [similarContent, setSimilarContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFull, setOpen] = useState(false);
  const [blogBody, setBlogBody] = useState([]);

  const { pathname } = useLocation();

  const paginate = (pageNumber) => {
    window.scrollTo({ top: 1150, left: 0, behavior: "smooth" });
    setCurrentPage(pageNumber);
  };

  async function getRelatedBlogs(key) {
    try {
      const response = await axios.get(
        "https://konectin-backend-hj09.onrender.com/user/getAllBlogs"
      );
      const blogs = response.data.blogs;

      const relatedBlogs = blogs.filter((blog) =>
        blog.category.some((feed) => key.includes(feed))
      );
      setSimilarContent(relatedBlogs);
      setLoading((prev) => ({ ...prev, related: false }));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const blogID = pathname.split("/")[3];

    async function addAsRead() {
      try {
        await axios.put(
          `https://konectin-backend-hj09.onrender.com/user/updateNumOfReads?blogId=${blogID}`
        );
      } catch (err) {
        console.log(err);
      }
    }

    async function getBlog() {
      try {
        const response = await axios.get(
          `https://konectin-backend-hj09.onrender.com/admin/getBlog?blogId=${blogID}`
        );
        const blogs = response.data.Blog;
        addAsRead();
        setBlog(blogs);
        setLoading((prev) => ({ ...prev, post: false }));
      } catch (err) {
        console.log(err);
      }
    }

    getBlog();
  }, [pathname]);

  useEffect(() => {
    getRelatedBlogs(blog.category);
  }, [blog]);

  useEffect(() => {
    if (isLoading.related) {
      const preloader = new Array(6).fill({
        title: "Loading contents",
        readingTime: "1 min read",
        category: ["career", "start-up", "soft-skill"],
        updatedAt: new Date().getDate(),
        blurred: true,
      });

      setSimilarContent(preloader);
    }

    if (isLoading.post) {
      const preloader = {
        body: `The job interview process can be a nerve-wracking experience, but with the right preparation and mindset, you can increase your chances of success. Whether you are a recent graduate, a seasoned professional, or a career changer, these five essential steps will help you ace your interviews and make a great impression on potential employers. Step 1: Research the Company<br /><p>Many interviewers ask similar questions to get to know you better and evaluate your fit for the position. Prepare answers to questions like "Tell me about yourself", "Why do you want to work here?" and "What are your strengths and weaknesses?"</p><p>Take the time to craft thoughtful and concise responses that highlight your relevant skills and experience. Practice these responses with a friend or family member to help build your confidence and improve your delivery.</p>Step 3: Dress Professionally<br/><p>First impressions count, and how you dress is an important part of that. Make sure you wear clean, professional attire that is appropriate for the company's culture. If you are unsure about the dress code, research the company's website or LinkedIn page for visual cues, or reach out to someone at the company for clarification.</p><p>Remember, your attire should reflect your respect for the company and the interview process. Don't take any chances; dress appropriately, even if the company has a casual dress code.</p>Step 4: Practice Active Listening<br /><p>During the interview, make sure you listen carefully to the interviewer's questions and respond thoughtfully. Avoid interrupting the interviewer and show that you are engaged in the conversation.</p><p>Ask clarifying questions if you are unsure about a question, and take the time to consider your responses before speaking. Show that you are interested in the company and the position by actively listening and responding to the interviewer's questions.</p> Step 5: Follow Up and Reflect<br/><p>After the interview, make sure to send a follow-up email to thank the interviewer for their time and reiterate your interest in the position. This shows that you are professional, courteous, and serious about the opportunity.</p><p>Take the time to reflect on the interview, considering what went well and what you could improve for future interviews. Make note of any additional questions or concerns you may have, and be sure to address them in your follow-up email or in future interviews.</p><p>In conclusion, following these five essential steps will help you prepare for and ace your job interviews. Remember to research the company, prepare answers to common questions, dress professionally, practice active listening, and follow up after the interview. With the right preparation and mindset, you can increase your chances of success and land your dream job.</p>`,
        title: "Loading contents",
        readingTime: "1 min read",
        category: ["career", "start-up", "soft-skill"],
        updatedAt: new Date().getDate(),
        blurred: true,
      };

      setBlog(preloader);
    }
  }, [isLoading]);

  useEffect(() => {
    if (blog.body) {
      const splittedBody = blog.body.split(" ");
      let firstSentence = "";
      let secondSentence = "";
      for (let i = 0; i < 274; i++) {
        firstSentence += ` ${splittedBody[i]}`;
      }
      for (let i = 274; i < splittedBody.length; i++) {
        secondSentence += ` ${splittedBody[i]}`;
      }
      setBlogBody([firstSentence, secondSentence]);
    }
  }, [blog]);

  const [cardsPerPage, setCards] = useState(6);

  useEffect(() => {
    setCards(isFull ? 3 : 6);
  }, [isFull]);

  const currentSimilarContent = similarContent.slice(
    currentPage * cardsPerPage - cardsPerPage,
    currentPage * cardsPerPage
  );

  return (
    <div className="flex flex-col gap-10">
      <div
        className={`flex flex-col gap-4 pt-8 ${
          isLoading.post && "blurry-text-md animate-pulse"
        }`}
      >
        <div className="text-sm space-y-2 text-neutral-300 text-center">
          <h1 className="text-3xl font-semibold mb-1 text-neutral-100">
            {blog.title}
          </h1>
          <p>Konectin</p>
          <p>{blog.readingTime}</p>
        </div>
        <div className="max-w-screen-md w-full mx-auto">
          <div className="w-full bg-neutral-500 overflow-hidd rounded-t-2xl">
            <img
              className="object-contain mx-auto"
              src={blog.image}
              alt={blog.title}
            />
          </div>
          <div className="text-start text-xs leading-normal bg-white py-8 rounded-b-md">
            <div className="flex flex-wrap w-10/12 mx-auto">
              <article
                dangerouslySetInnerHTML={{
                  __html: !isFull ? blogBody[0] : blogBody[0] + blogBody[1],
                }}
              ></article>
              {!isLoading.post && (
                <div className="pb-3">
                  <font
                    onClick={() => setOpen((prev) => !prev)}
                    className="text-primary-500 cursor-pointer"
                  >
                    {!isFull ? "Read more..." : "Read Less..."}
                  </font>
                </div>
              )}
            </div>
            {isFull && (
              <div className="w-10/12 mx-auto">
                <Share />
                <BlogComment blogID={pathname.split("/")[3]} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-xl mb-6">Related articles</p>
        <div
          className={`blog-grid-system gap-6 items-stretch ${
            isLoading.related && "animate-pulse"
          }`}
        >
          {currentSimilarContent.map((blog, index) => (
            <BlogCard key={index} article={blog} isLoading={isLoading} />
          ))}
        </div>
        <Pagination
          cardsPerPage={cardsPerPage}
          totalCards={similarContent.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default BlogContent;
