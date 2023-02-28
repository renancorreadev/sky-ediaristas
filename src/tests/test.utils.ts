export const mockRouter = jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
