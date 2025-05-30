import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { GuessResult } from '@/types';

export default function ResultHistory({ history }: { history: GuessResult[] }) {
    return (
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Time</TableCell>
                        <TableCell>Guess</TableCell>
                        <TableCell>Result</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {history.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.time}</TableCell>
                            <TableCell>{item.guess}</TableCell>
                            <TableCell sx={{ color: item.won ? 'green' : 'red' }}>{item.result}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
    );
}
