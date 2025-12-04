import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import Hero from '../Hero';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/config';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

// Mock scrollIntoView
beforeEach(() => {
  Element.prototype.scrollIntoView = vi.fn();
});

describe('Hero Component', () => {
  it('renders hero section with name and title', () => {
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <Hero />
      </I18nextProvider>
    );

    expect(getByText(/John Doe/i)).toBeInTheDocument();
    expect(getByText(/Frontend Developer/i)).toBeInTheDocument();
  });

  it('renders call-to-action buttons', () => {
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <Hero />
      </I18nextProvider>
    );

    expect(getByText(/View Projects/i)).toBeInTheDocument();
    expect(getByText(/Contact Me/i)).toBeInTheDocument();
    expect(getByText(/Download Resume/i)).toBeInTheDocument();
  });
});

