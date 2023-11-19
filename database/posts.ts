import { cache } from 'react';
import { Post } from '../migrations/00002-createTablePosts';
import { sql } from './connect';

export const createPost = cache(
  async (userId: number, textTitle: string, textContent: string) => {
    const [post] = await sql<Post[]>`
      INSERT INTO
        posts (
          user_id,
          text_title,
          text_content
        )
      VALUES
        (
          ${userId},
          ${textTitle},
          ${textContent}
        ) RETURNING *
    `;

    return post;
  },
);

// export const deletePost = async (postId: number) => {
//   await sql`
//     DELETE FROM posts
//     WHERE
//       postId = ${postId}
//   `;
// };

export async function deletePost(postId: number): Promise<void> {
  await sql`
    DELETE FROM posts
    WHERE
      id = ${postId}
  `;
}
