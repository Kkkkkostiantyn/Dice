import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#9C27B0',
        },
        secondary: {
            main: '#ff9800',
        },
        text: {
            secondary: '#666666'
        },
        success: {
            main: '#4caf50',
        },
        error: {
            main: '#f44336',
        },
        background: {
            default: '#FFF',
        },
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                filledSuccess: {
                    color: '#fff', // white text for success alerts
                },
                filledError: {
                    color: '#fff', // white text for error alerts
                },
                filledWarning: {
                    color: '#fff',
                },
                filledInfo: {
                    color: '#fff',
                },
            },
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    shape: {
        borderRadius: 4,
    },
});

export default theme;