import { useCallback, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from '@mui/material';

import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

import Scoreboard from '../../components/Scoreboard';

export interface IMatch {
  id: number;
  stage: string;
  home: string;
  away: string;
  homeFlag?: string;
  awayFlag?: string;
  homeGoals: number;
  awayGoals: number;
  live: boolean;
  time: string;
}

const Matches = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const [pastMatches, setPastMatches] = useState<Array<IMatch>>([]);
  const [liveMatches, setLiveMatches] = useState<Array<IMatch>>([]);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderScoreboard = useCallback((match: IMatch) => (
    <Grid item xs={4} key={match.id}>
      <Scoreboard
        stage={match.stage}
        home={match.home}
        homeFlag={match.homeFlag}
        away={match.away}
        awayFlag={match.awayFlag}
        homeGoals={match.homeGoals}
        awayGoals={match.awayGoals}
        live={match.live}
        time={match.time}
      />
    </Grid>
  ), []);

  return (
    <Box>
      <Accordion expanded={expanded === 'past-matches'} onChange={handleChange('past-matches')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="past-matches-bh-content"
          id="past-matches-bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Partidas Encerradas
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {pastMatches.map((match) => renderScoreboard(match))}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'live-matches'} onChange={handleChange('live-matches')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="live-matches-bh-content"
          id="live-matches-bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Partidas em Andamento</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {liveMatches.map((match) => renderScoreboard(match))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Matches;
