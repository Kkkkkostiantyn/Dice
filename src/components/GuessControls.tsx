import {Box, Radio, RadioGroup, FormControlLabel, Slider, Typography} from '@mui/material';

type Props = {
    guess: number;
    setGuess: (value: number) => void;
    direction: 'under' | 'over';
    setDirection: (value: 'under' | 'over') => void;
};

export default function GuessControls({guess, setGuess, direction, setDirection}: Props) {
    return (
        <Box>
            <RadioGroup
                row
                value={direction}
                onChange={(e) => setDirection(e.target.value as 'under' | 'over')}
                sx={{justifyContent: 'center', mb: 2}}
            >
                <FormControlLabel value="under" control={<Radio/>} label="Under"/>
                <FormControlLabel value="over" control={<Radio/>} label="Over"/>
            </RadioGroup>
            <Slider
                value={guess}
                sx={{
                    width: 320,
                    height: 2,
                }}
                onChange={(_, value) => setGuess(value as number)}
                step={1}
                min={0}
                max={100}
                size={"small"}
                valueLabelDisplay="on"
            />
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{cursor: 'pointer'}}
                >
                    0
                </Typography>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{cursor: 'pointer'}}
                >
                    100
                </Typography>
            </Box>
        </Box>
    );
}
