'use client';

import {Box, Container} from '@mui/material';
import NumberDisplay from '@/components/NumberDisplay';
import GuessControls from '@/components/GuessControls';
import PlayButton from '@/components/PlayButton';
import ResultHistory from '@/components/ResultHistory';
import FeedbackAlert from '@/components/FeedbackAlert';
import { useGuessGame } from '@/hooks/useGuessGame';

export default function Home() {
  const game = useGuessGame();

  return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Box   sx={{
         display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
                mb: 3,
            },
        }}>
          <FeedbackAlert result={game.lastResult} />
          <NumberDisplay number={game.generatedNumber} />
          <GuessControls
              guess={game.guess}
              setGuess={game.setGuess}
              direction={game.direction}
              setDirection={game.setDirection}
          />
          <PlayButton onClick={game.makeGuess} />
          <ResultHistory history={game.history} />
        </Box>
      </Container>
  );
}
