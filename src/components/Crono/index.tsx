import { useMemo } from 'react';
import { Container, LinearProgress, Typography } from '@mui/material';

export interface ICronoProps {
  live: boolean;
  time: string;
}

const Crono = ({
  live,
  time,
}: ICronoProps) => {
  const currentTime = useMemo(() => {
    if (live) return `Em andamento: ${time}"`;
    return `Encerrada em: ${new Date(time).toLocaleString()}`;
  }, [live, time]);

  return (
    <Container sx={{ width: 350 }}>
      <Typography fontSize={14}>{currentTime}</Typography>
      {live && <LinearProgress color="success" />}
    </Container>
  );
};

export default Crono;
