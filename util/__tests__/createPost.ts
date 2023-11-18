import { expect, test } from '@jest/globals';
import { createPost } from '../functions';

test('Create Post - should create a post for a user', async () => {
  // Arrange
  const userId = 1;
  const textTitle = 'Test Title';
  const textContent = 'Test Content';

  // Act
  const createdPost = await createPost(userId, textTitle, textContent);

  // Assert
  expect(createdPost).toBeDefined();
  // Add more assertions based on your create post logic
});
