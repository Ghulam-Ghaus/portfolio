import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Home() {
  return (
    <section className="min-h-screen w-full flex items-center gap-28">
      <div className="relative h-[33rem] min-w-[432px] ml-12">
        <Image
          src="/img.jpg"
          alt="Profile image"
          quality={100}
          className="rounded-[2rem]"
          fill
        />
      </div>
      <div className="flex gap-4 flex-col items-start justify-center">
        <div className="flex flex-col gap-1.5">
          <h1 className="flex items-center gap-3 text-5xl font-bold">
            <hr className="w-10 h-1.5 bg-[#FFB400] rounded-md" />
            <span className="text-[#FFB400]">I'M GHULAM GHAUS.</span>
          </h1>
          <h1 className="ml-[3rem] text-4xl font-bold">
            <span className="text-gray-500">Generative AI Engineer</span>
          </h1>
        </div>
        <p className="text-lg">
          I excel in executing projects focused on database and server
          infrastructure, improving business processes, and developing secure
          applications using Node.js frameworks like Express, Nest.js, and
          Next.js. My expertise includes designing RESTful APIs, integrating
          payment gateways, and implementing email workflows and web sockets.
          I've contributed to projects like the Maturity Assessment tool and
          virtual Health System.
        </p>
        <button className="relative flex items-center justify-between w-[230px] h-[55px]  rounded-full border border-[#FFB400] ">
          <span className="flex-1">Click Me</span>
          <FaArrowCircleRight
            className="h-full w-[53px]"
            size={30}
            color="#FFB400"
          />
        </button>
      </div>
    </section>
  );
}
