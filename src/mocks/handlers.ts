import { http, delay, HttpResponse, type HttpHandler } from 'msw';

interface MockItem {
  name: string;
  imagePath: string;
}

export const handlers: HttpHandler[] = [
  // set up http or graphQL handlers
  http.get<never, never, MockItem[]>('http://localhost:5100/mock', async () => {
    await delay(100);
    return HttpResponse.json<MockItem[]>([
      { name: 'Chocolate', imagePath: '/images/chocolate.png' },
      { name: 'Vanilla', imagePath: '/images/vanilla.png' },
    ]);
  }),
];
