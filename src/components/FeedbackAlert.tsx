import {Alert} from '@mui/material';
import {GuessResult} from '@/types';

export default function FeedbackAlert({result}: { result?: GuessResult }) {
    if (!result) return null;

    return (
        <Alert variant="filled" severity={result.won ? 'success' : 'error'}>
            {result.won ? 'You won!' : 'You lost'}
        </Alert>
    );
}
