import Image from "next/image";
const postheader = (title, image) => {
  return (
    <div>
      <header>
        <h1>{title}</h1>
        <Image src={image} alt={title} width={200} height={200} />
      </header>
    </div>
  );
};

export default postheader;
