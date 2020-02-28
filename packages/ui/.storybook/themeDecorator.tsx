// @ts-ignore
import React, { useState } from 'react'
import Select from '@material-ui/core/Select'
import Divider from '@material-ui/core/Divider'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import themes, { createTheme, ThemeProvider } from '@keldor-ds/themes/build'

const defaultTheme = 'blank'

const ThemeDecorator = (storyFn) => {
  const [themeId, setThemeId] = useState(defaultTheme);
  const [theme, setTheme] = useState(createTheme(themes[defaultTheme]));

  const updateThemeId = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedTheme = event.target.value
    setThemeId(selectedTheme);
    setTheme(createTheme(themes[selectedTheme]))
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <FormControl style={{minWidth: 120}}>
          <InputLabel>Theme</InputLabel>
          <Select
            id="themeSelector"
            value={themeId}
            onChange={updateThemeId}
          >
            {Object.keys(themes).map(themeId => (
              <MenuItem key={themeId} value={themeId}>{themeId}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <div style={{ marginBottom: 20, marginTop: 20 }} />

        {storyFn()}
      </>
    </ThemeProvider>
  );
};

export default ThemeDecorator;
