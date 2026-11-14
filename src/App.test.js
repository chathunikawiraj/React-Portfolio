import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AdminProvider } from './AdminContext';
import App from './App';

const originalFetch = global.fetch;
const originalScrollIntoView = window.HTMLElement.prototype.scrollIntoView;
const originalWindowScrollTo = window.scrollTo;

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve([])
  });
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  window.scrollTo = jest.fn();
});

afterEach(() => {
  global.fetch = originalFetch;
  if (originalScrollIntoView) {
    window.HTMLElement.prototype.scrollIntoView = originalScrollIntoView;
  } else {
    delete window.HTMLElement.prototype.scrollIntoView;
  }
  window.scrollTo = originalWindowScrollTo;
});

test('shows portfolio sections and scrolls to the selected section', async () => {
  render(
    <MemoryRouter>
      <AdminProvider>
        <App />
      </AdminProvider>
    </MemoryRouter>
  );

  expect(document.getElementById('home')).toBeInTheDocument();
  expect(document.getElementById('about')).toBeInTheDocument();
  expect(document.getElementById('projects')).toBeInTheDocument();
  expect(document.getElementById('contact')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
    'href',
    '/#about'
  );

  fireEvent.click(screen.getByRole('link', { name: 'About' }));
  await waitFor(() => {
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0 });
  });
});
