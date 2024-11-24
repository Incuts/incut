import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="px-5 flex flex-col justify-center items-center gap-10 text-center mt-10 lg:mt-15 mb-10 lg:mb-20">
      <h1 className="font-bold text-4xl lg:text-6xl">
        Hire high-performing overseas video editors
      </h1>
      <p className="font-thin text-2xl lg:text-4xl">Get us for free</p>
      <Link href="#">
        <Button className="rounded-3xl p-8 text-md">Hire an Editor</Button>
      </Link>
    </div>
  );
};

export default page;
