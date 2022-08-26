import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, Slider, ThemeProvider } from '@mui/material';

const ProgressBar = ({track}) => {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        main: '#b2102f',
        contrastText: '#000',
      },
    },
  });

  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  return (
    <ThemeProvider theme={theme}>
      {/* <LinearProgress variant="determinate" color='secondary' style={{ height: 15 }} value = '50'/> */}
      <Slider 
        color='secondary' 
        style={{ height: 15 }}
        step={1}
        min={0}
        value={position}
        max={+track?.duration || 0}
        onChange={(_, value) => setPosition(value)}
      />
    </ThemeProvider>
  )
}

export default ProgressBar