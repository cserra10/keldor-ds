import React, { useEffect, useState } from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import themes from '@keldor-ds/themes/src/';
// import Editor from 'react-simple-code-editor';
// import { highlight, languages } from 'prismjs/components/prism-core';
// import 'prismjs/components/prism-clike';
// import 'prismjs/components/prism-javascript';
// import './code-editor.css';

const ThemeDecorator = (storyFn) => {
  const [themeId, setThemeId] = useState('bestday');
  const [LIVE_THEMES, SET_LIVE_THEMES] = useState({...themes});
  const [theme, setTheme] = useState(createMuiTheme(themes[themeId]));
  const [stringTheme, setStringTheme] = useState(JSON.stringify(themes.bestday, null, 2));

  const updateThemeId = (event: React.ChangeEvent<{ value: unknown }>) => {
    setThemeId(event.target.value);
  };

  useEffect(() => {
    try {
      SET_LIVE_THEMES({
        ...LIVE_THEMES,
        [themeId]: JSON.parse(stringTheme)
      })
    } catch (e) {
      console.log('invalid string theme')
    }

    try {
      const _theme = JSON.parse(stringTheme)
      setTheme(createMuiTheme(_theme))
    } catch (e) {
      console.log('invalid mui theme')
    }
  },[stringTheme]);

  return (
    <ThemeProvider theme={theme}>
      <>
        {/*<FormControl style={{minWidth: 120}}>*/}
        {/*  <InputLabel>Theme</InputLabel>*/}
        {/*  <Select*/}
        {/*    id="themeSelector"*/}
        {/*    value={themeId}*/}
        {/*    onChange={updateThemeId}*/}
        {/*  >*/}
        {/*    {Object.keys(themes).map(themeId => (*/}
        {/*      <MenuItem key={themeId} value={themeId}>{themeId}</MenuItem>*/}
        {/*    ))}*/}
        {/*  </Select>*/}
        {/*</FormControl>*/}

        {/* Theme live editor */}
        {/*<div className="container_editor_area">*/}
        {/*  <Editor*/}
        {/*    value={stringTheme}*/}
        {/*    onValueChange={setStringTheme}*/}
        {/*    highlight={code => highlight(code, languages.js)}*/}
        {/*    padding={10}*/}
        {/*    style={{*/}
        {/*      fontFamily: '"Fira code", "Fira Mono", monospace',*/}
        {/*      fontSize: 12,*/}
        {/*    }}*/}
        {/*    tabSize={2}*/}
        {/*  />*/}
        {/*</div>*/}

        {storyFn()}
      </>
    </ThemeProvider>
  );
};

export default ThemeDecorator;
