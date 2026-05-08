import "@mantine/core/styles.css";

import { createTheme, MantineProvider, Button } from "@mantine/core";

const theme = createTheme({
  // TODO
});

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <Button>graph algorithms</Button>
    </MantineProvider>
  );
};

export default App;
