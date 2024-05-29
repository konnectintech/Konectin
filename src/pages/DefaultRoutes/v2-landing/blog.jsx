import { blog1, blog2, blog3 } from "../../../assets";

export default function Blog() {
  const data = [
    {
      src: blog1,
      title: "Let’s Talk About Work, Life and Balance",
      author: "Konectin",
      time: 5,
      date: "01 January, 2023",
    },
    {
      src: blog2,
      title: "Konectin hangout, all that went down",
      author: "Konectin",
      time: 5,
      date: "01 January, 2023",
    },
    {
      src: blog3,
      title: "Three Tips to Excel At Salary Negotiations",
      author: "Konectin",
      time: 5,
      date: "01 January, 2023",
    },
  ];
  return (
    <div className="bg-primary-500 py-16 px-6 md:px-20 md:py-28 flex flex-col gap-10 md:gap-20">
      <div className="flex flex-col gap-3 md:w-8/12">
        <p className="bg-gradient-to-r from-white from-5% via-[#3DF110] via-25% to-secondary-600 to-45% bg-clip-text text-transparent font-extrabold text-3xl md:text-4xl">
          Stay Ahead Of The Competition
        </p>
        <p className="text-sm md:text-xl text-neutral-800">
          Explore our blog for insightful articles and updates. Equip yourself
          with the knowledge to outshine the competition. Continue learning,
          keep evolving, and head towards success.
        </p>
      </div>
      <div className="flex flex-col gap-16 items-center">
        <div className="flex flex-col gap-12 md:grid md:grid-cols-3 md:gap-6">
          {data.map((item, index) => (
            <BlogCard key={index} item={item} />
          ))}
        </div>
        <button className="flex items-center justify-center md:text-xl font-medium md:font-bold px-5 md:px-12 py-3.5 md:py-6 bg-secondary-500 text-white rounded-md md:rounded-lg">
          Explore Our Blog
        </button>
      </div>
    </div>
  );
}

export function BlogCard({ item }) {
  return (
    <div className="flex flex-col rounded-2xl md:rounded-2xl h-fit gap-5 md:gap-6 bg-white">
      <div className="rounded-2xl">
        <img
          src={item.src}
          alt={item.title}
          style={{ width: "100%" }}
          className="rounded-tr-2xl rounded-tl-2xl h-[330px] md:h-[416px]"
        />
      </div>
      <div className="px-4 mb-6 flex flex-col gap-5 md:gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">{item.title}</p>
          <p className="font-medium text-lg text-secondary-500">
            {item.author}
          </p>
        </div>
        <div className="flex items-center justify-between font-medium text-sm">
          <p>
            <span>{item.time}</span> mins read
          </p>
          <p>{item.date}</p>
        </div>
      </div>
    </div>
  );
}
