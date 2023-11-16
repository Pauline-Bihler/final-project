import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  getAllUserPosts,
  getUserBySessionToken,
  getUserPostBySessionToken,
} from '../../database/users';
import CreatePostsForm from './CreatePostsForm';
import styles from './forum.module.scss';

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

  return (
    <div>
      <div>
        <h1> You got some tips or stories to other fellow pet parents? ♥</h1>
        <div className={styles['help']}>
          <p>Feel free to voice out your thoughts here.</p>
        </div>
      </div>
      <div>
        <CreatePostsForm userId={user.id} />
        <br />
        <br />
        <br />
        <div>
          {allUserPosts.length > 0 ? (
            <>
              <h2>All Posts</h2>

              <ul>
                {allUserPosts.map((post) => (
                  <li key={`animal-div-${post.postId}`}>
                    {post.textTitle}
                    <br />
                    {post.textContent}
                    <p>Posted by: {post.username}</p>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <h2> No posts yet</h2>
          )}
        </div>
      </div>
    </div>
  );
}
