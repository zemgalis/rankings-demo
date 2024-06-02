import { render, screen, waitFor } from "@testing-library/react";

import App from './App';

describe( "App", () => {
  beforeEach(() => {
    const mockItems = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ];
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.resolve(mockItems),
    } as Response);
  });
  
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("renders heading", async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByRole("heading", { name: "Rankingsxxx" })).toBeDefined();
    });
  });
});