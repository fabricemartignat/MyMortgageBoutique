// export const theme = createTheme({
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           backgroundColor: '#e53935',
//         },
//       },
//     },
//   },
// })

import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#14202e',
    },
    secondary: {
      main: '#091235',
    },
    toggle: {
      main: '#2b4257',
    },
  },
})
