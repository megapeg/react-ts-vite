import { expect, afterEach, beforeAll, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import { server } from '../mocks/server';

// Add custom Jest-DOM matchers to Vitest's expect function
expect.extend(matchers);

beforeAll(() => {
  try {
    server.listen({ onUnhandledRequest: 'error' });
  } catch (error) {
    console.error('Failed to start MSW server:', error);
    throw error;
  }
});
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());
