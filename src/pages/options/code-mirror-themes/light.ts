import { lighten, Palette } from '@mui/material/styles';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';

// For some weird reason these interfaces need to be imported via 'import type':
import type { CreateThemeOptions } from '@uiw/codemirror-themes';
import type { Extension } from '@codemirror/state';

export function lightTheme(palette: Palette): Extension {
  const settings: CreateThemeOptions['settings'] = {
    background: palette.background.default, // was '#0f0f0f'
    foreground: palette.primary.main, // was '#defdef'
    caret: palette.primary.main, // was '#00FF00'
    selection: palette.secondary.main,
    selectionMatch: palette.secondary.main,
    gutterBackground: palette.action.disabledBackground,
    gutterForeground: palette.text.primary, // was '#FFFFFF'
    lineHighlight: lighten(palette.primary.main, 0.9), // was '#0a6bcb3d'
  };

  return createTheme({
    theme: 'light',
    settings,
    styles: [
      { tag: t.keyword, color: 'darkgoldenrod', fontWeight: 'bold' },
      { tag: t.atom, color: '#77F' },
      { tag: t.comment, color: '#7a7b7c', fontStyle: 'italic' },
      {
        tag: t.number,
        color: palette.primary.main, // was 'violet'
      },
      { tag: t.definition(t.variableName), color: '#fffabc' },
      {
        tag: t.variableName,
        color: palette.text.primary, // was '#abcdef'
      },
      { tag: t.function(t.variableName), color: '#fffabc' },
      { tag: t.typeName, color: '#FFDD44' },
      { tag: t.tagName, color: '#def' },
      { tag: t.string, color: '#2b4' },
      { tag: t.meta, color: '#C9F' },
      // { tag: t.qualifier, color: '#FFF700' },
      // { tag: t.builtin, color: '#30aabc' },
      { tag: t.bracket, color: '#8a8a8a' },
      { tag: t.attributeName, color: '#DDFF00' },
      { tag: t.heading, color: 'aquamarine', fontWeight: 'bold' },
      { tag: t.link, color: 'blueviolet', fontWeight: 'bold' },
    ],
  });
}