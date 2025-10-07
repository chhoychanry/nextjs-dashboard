import { Metadata } from 'next';
// import { fetchPosts } from '@/app/lib/data';
export const metadata: Metadata = {
  title: 'Posts',
};
export default function page() {
    // const posts = fetchPosts();
    // console.log(posts);
  return (
    <div>
        <div>page</div>
    </div>
  )
}
