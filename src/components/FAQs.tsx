import { Typography } from "@material-tailwind/react";
import { NavBar } from "./ShopPage/NavBar";
import { HeroHeader } from "./ContactUs";
import { Footer } from "./HomePage/Footer";

const faqs = [
  {
    title: "How do I order?",
    desc: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.",
  },
  {
    title: "How can i make the payment?",
    desc: "It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter. Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too. We're not always in the position that we want to be at.",
  },
];

export function Faqs4() {
  return (
    <section className=" ">
      <NavBar />
      <HeroHeader text="FAQs" />
      <div className="container mx-auto my-[148px]">
        <div className="mb-14 text-center ">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 text-4xl !leading-snug lg:text-[40px]"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Frequently asked questions
          </Typography>
          <Typography
            className="mx-auto font-normal text-[18px] !text-gray-500 lg:max-w-3xl"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            A lot of people don&apos;t appreciate the moment until it&apos;s
            passed. I&apos;m not trying my hardest, and I&apos;m not trying to
            do.
          </Typography>
        </div>
        <div className="max-w-3xl mx-auto grid gap-10">
          {faqs.map(({ title, desc }) => (
            <div key={title}>
              <Typography
                color="blue-gray"
                className="pb-6 text-[20px] font-bold"
                placeholder={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {title}
              </Typography>
              <div className="border-t border-gray-200 pt-4">
                <Typography
                  className="font-normal !text-gray-500"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Faqs4;
