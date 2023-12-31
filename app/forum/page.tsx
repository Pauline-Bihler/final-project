// 'use client';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
// import { deletePost } from '../../database/posts';
import { getAllUserPosts, getUserBySessionToken } from '../../database/users';
import CreatePostsForm from './CreatePostsForm';
// import styles from './forum.module.scss';
import style from './page.module.scss';

export const metadata = {
  title: 'Forum | Kitties & Doggies of Graz',
  description: 'Adopt & support animals in need',
};

export default async function ForumPage() {
  // Task: Restrict access to the posts page and only display posts belonging to the current logged in user
  // 1. Check if the sessionToken cookie exists
  // 2. Query user with the sessionToken
  // 3. If the user exists, render the page
  // 4. If the user does not exist, redirect to the

  // 1. Checking if the sessionToken cookie exists
  const sessionTokenCookie = cookies().get('sessionToken');

  const user =
    sessionTokenCookie &&
    (await getUserBySessionToken(sessionTokenCookie.value));

  if (!user) redirect('/login?returnTo=/forum');

  // Display the posts for the current logged in user
  // const userPost = await getUserPostBySessionToken(sessionTokenCookie.value);

  // console.log('Checking: ', userPost);

  const allUserPosts = await getAllUserPosts();

  // const router = useRouter();
  // const handleDeletePost = async (postId) => {
  //   // Call the function to delete the post
  //   await deletePost(postId);

  //   // Refresh the page or update the state to remove the deleted post from the UI
  //   // For simplicity, let's refresh the page
  //   // router.refresh();
  // };

  return (
    <div>
      <div>
        <div className={style['horizontal-banner']}>
          <h1 className={style['banner-text']}>
            Your Pet Parenting Voice Matters!
          </h1>
          <h2 className={style['banner-text']}>Share Tips and Stories Here.</h2>
        </div>
        {/* <div className={styles['help']}>
          <p>Feel free to voice out your thoughts here.</p>
        </div> */}
      </div>
      <br />
      <br />
      <div>
        <CreatePostsForm userId={user.id} />
        <br />
        <br />
        <br />
        <div>
          {allUserPosts.length > 0 ? (
            <>
              <h2 className={style['text-h2']}>All Posts</h2>

              <ul className={style['ul-container']}>
                {allUserPosts.map((post) => (
                  <li
                    key={`animal-div-${post.postId}`}
                    className={style['post-box']}
                  >
                    <h2>{post.textTitle}</h2>
                    {post.textContent}
                    <p>Posted by: {post.username}</p>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <h2 className={style['banner-text']}> No posts yet</h2>
          )}
        </div>
      </div>
    </div>
  );
}

//   return (
//     <div>
//       <div>
//         <h1>
//           Your Pet Parenting Voice Matters! Share Tips and Stories Here ♥
//         </h1>
//         <div className={styles['help']}>
//           <p>Feel free to voice out your thoughts here.</p>
//         </div>
//       </div>
//       <div>
//         <CreatePostsForm userId={user.id} />
//         <br />
//         <br />
//         <br />
//         <div>
//           {allUserPosts.length > 0 ? (
//             <>
//               <h2>All Posts</h2>
//               <ul>
//                 {allUserPosts.map((post) => (
//                   <li key={`animal-div-${post.postId}`}>
//                     {post.textTitle}
//                     <br />
//                     {post.textContent}
//                     <p>Posted by: {post.username}</p>
//                     {/* Add a delete button */}
//                     <button onClick={() => handleDeletePost(post.postId)}>
//                       Delete
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </>
//           ) : (
//             <h2>No posts yet</h2>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
