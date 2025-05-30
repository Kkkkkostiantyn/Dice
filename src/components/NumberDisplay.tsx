import {Paper, Typography} from '@mui/material';

export default function NumberDisplay({number}: { number: number }) {
    return (
        <Paper elevation={0} sx={{
            width: 320,
            height: 200,
            mx: 'auto',
            py: 4,
            textAlign: 'center',
            bgcolor: '#F5F5F5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography variant="h1">{number}</Typography>
        </Paper>
    );
}
