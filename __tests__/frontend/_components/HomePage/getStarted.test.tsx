import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { GetStarted } from '@/components/HomePage';

describe('HomePage', () => {
  test('GetStarted loads and renders the text', () => {
    render(<GetStarted />);
    const first_half = screen.getByText(/Get started by editing/i);
    expect(first_half).toBeInTheDocument();

    const second_half = screen.getByText(/app\/page.tsx/i);
    expect(second_half).toBeInTheDocument();
  })
});
