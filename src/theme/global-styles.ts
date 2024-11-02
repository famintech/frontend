import { css } from '@emotion/react';
import { Theme } from '@mui/material/styles';

export const globalStyles = (theme: Theme) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  body {
    background-color: ${theme.palette.background.default};
    color: ${theme.palette.text.primary};
    font-family: ${theme.typography.fontFamily};
  }
`;