import { ThemeProvider, createTheme } from '@mui/material';
import GlobalStyles from './GlobalStyles';

import Matches from './pages/Matches';

const App = () => (
  <ThemeProvider theme={createTheme({ palette: { mode: 'dark' } })}>
    <GlobalStyles />
    <Matches />
  </ThemeProvider>
);

export default App;
