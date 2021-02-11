//@ts-nocheck
import { ThemeProvider } from 'styled-components';
import { COLORS } from '../constants';


const ThemeContext = ({ children }:any) => {
    return <ThemeProvider theme={{ colors: COLORS }}>{children}</ThemeProvider>;
  };

  export default ThemeContext;