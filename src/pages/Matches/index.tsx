import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from '@mui/material';
import ActionCable from 'actioncable';

import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

import Scoreboard from '../../components/Scoreboard';

import { finishedMatches } from './api';

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
  const ref = useRef<ActionCable.Cable | null>(null);
  const [expanded, setExpanded] = useState<string | false>(false);

  const [pastMatches, setPastMatches] = useState<Array<IMatch>>([]);
  const [liveMatches, setLiveMatches] = useState<Array<IMatch>>([]);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const formatLiveMatches = useCallback((matches: any) => {
    console.log(matches);
    setLiveMatches(matches.map((match: any) => ({
      id: match.id,
      stage: match.stage,
      home: match.home,
      away: match.away,
      homeGoals: match.homeGoals,
      awayGoals: match.awayGoals,
      live: true,
      time: Number(match.time).toFixed(0),
    })));
  }, []);

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

  const url = 'http://localhost:3000/cable';

  const handleReceivedMessages = useCallback((payload: any) => {
    formatLiveMatches(payload.matches);
  }, []);

  useEffect(() => {
    if (ref.current) return undefined;

    const cable = ActionCable.createConsumer(url);

    cable.subscriptions.create({ channel: 'MatchesChannel' }, {
      connected() {
        finishedMatches(setPastMatches);
      },
      disconnected() {
        console.log('Disconnected');
      },
      received: (payload) => handleReceivedMessages(payload),
    });
    cable.connect();

    ref.current = cable;

    return () => cable.ensureActiveConnection();
  }, []);

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
