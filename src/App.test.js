import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';
import { Provider } from 'react-redux';

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

test('renders add a row button', () => {
  render(<Provider store={mockStore({})}>
    <App />
  </Provider>);
  const linkElement = screen.getByText(/Add a row/i);
  expect(linkElement).toBeInTheDocument();
});
