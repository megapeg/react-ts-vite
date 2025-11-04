import { http, delay, HttpResponse, type HttpHandler } from 'msw';

interface MockItem {
  name: string;
  imagePath: string;
}

export const handlers: HttpHandler[] = [
  // set up http or graphQL handlers
  // Example mock API endpoint - can be deleted
  http.get<never, never, MockItem[]>('http://localhost:5100/mock', async () => {
    await delay(100);
    return HttpResponse.json(
      [
        { name: 'Mock Test Item 1', imagePath: '/path/to/test-image1.jpg' },
        { name: 'Mock Test Item 2', imagePath: '/path/to/test-image2.jpg' },
      ],
      { status: 200 }
    );
  }),
];
