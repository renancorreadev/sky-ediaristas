jest.mock(
  'next/link',
  () =>
    ({ children }: { children: React.ReactNode }) =>
      children
);

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
