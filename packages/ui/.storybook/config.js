import { addDecorator, configure } from '@storybook/react';
import ThemeDecorator from './themeDecorator';

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(js|jsx|tsx)$/), module);
addDecorator(ThemeDecorator);
