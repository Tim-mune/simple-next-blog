import Image from "next/image";

const Hero = () => {
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="flex items-center justify-center p-2 mt-0">
        <Image
          src="/images/starter.jpg"
          alt="image about my self"
          className="rounded-full"
          width={400}
          height={400}
        />
      </div>
      <h1 className="mt-2 ">hello am Tim</h1>
      <p className="mt-2 font-light">
        i write articles about full-stack web development
      </p>
    </div>
  );
};

export default Hero;
