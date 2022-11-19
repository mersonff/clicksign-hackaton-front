import { ThemeProvider, createTheme } from '@mui/material';
import GlobalStyles from './GlobalStyles';

import Matches from './pages/Matches';

const App = () => (
  <ThemeProvider theme={createTheme()}>
    <GlobalStyles />
    <Matches />
  </ThemeProvider>
);

export default App;
