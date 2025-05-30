import { Button } from '@mui/material';

export default function PlayButton({ onClick }: { onClick: () => void }) {
    return (
        <Button variant="contained" sx={{
            width: 320, height: 42, mb: 4
        }}  color="primary"  onClick={onClick}>
            PLAY
        </Button>
    );
}
