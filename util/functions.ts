// utils/functions.ts

import { Post } from '../migrations/00002-createTablePosts';

export const createPost = async (
  userId: number,
  textTitle: string,
  textContent: string,
): Promise<Post> => {
  // Simulate the database insertion
  const mockPost: Post = {
    id: 1, // You can increment the ID for each test if needed
    user_id: userId,
    text_title: textTitle,
    text_content: textContent,
    created_at: new Date(),
  };

  // Return the mock post
  return mockPost;
};
