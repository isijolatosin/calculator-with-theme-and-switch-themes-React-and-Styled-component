import React, { useEffect, useState } from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/GlobalStyles';
import { useTheme } from './theme/useTheme';
import ThemeSelector from './ThemeSelector';

// 2: Create a cotainer
const Container = styled.div`
  margin: auto;
  /* margin: 5px auto 5px auto; */
`;

function App() {
  // 3: Get the selected theme, font list, etc.
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme]);

  // 4: Load all the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  // 5: Render if the theme is loaded.
  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container style={{ fontFamily: selectedTheme.font }}>
            <Wrapper>
              <ThemeSelector setter={setSelectedTheme} />
              {/* <Calculator theme={theme} /> */}
            </Wrapper>
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;

const Wrapper = styled.div`
  /* background-color: #3a4663; */
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
