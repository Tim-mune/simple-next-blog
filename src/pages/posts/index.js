import AllPosts from "@/components/AllPosts";

const dummyPosts = [
  { title: "item1", excerpt: "description", id: 1, featured: true },
  {
    title: "item2",
    excerpt: "something about product",
    id: 2,
    featured: true,
  },
  { title: "item4", excerpt: "finally about product", id: 3, featured: true },
];
const allPosts = () => {
  return <AllPosts posts={dummyPosts} />;
};
export default allPosts;
