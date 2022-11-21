import {
  Typography,
} from '@mui/material';

import Crono from '../Crono';

import { ContentBox, HeaderBox, ScoreboardPaper } from './styles';

export interface IScoreboardProps {
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

const Scoreboard = ({
  stage,
  home,
  away,
  homeFlag,
  awayFlag,
  homeGoals,
  awayGoals,
  live,
  time,
}: IScoreboardProps) => (
  <ScoreboardPaper>
    <HeaderBox>
      <Typography fontSize={14}>{stage}</Typography>
      <Crono live={live} time={time} />
    </HeaderBox>
    <ContentBox>
      {/* {homeFlag && <img src={homeFlag} height={60} width="auto" alt="home team flag" />} */}
      <Typography fontSize={16}>{home}</Typography>
      <Typography fontSize={24}>{homeGoals}</Typography>
      <Typography fontSize={14}>x</Typography>
      <Typography fontSize={24}>{awayGoals}</Typography>
      <Typography fontSize={16}>{away}</Typography>
      {/* {awayFlag && <img src={awayFlag} height={60} width="auto" alt="away team flag" />} */}
    </ContentBox>
  </ScoreboardPaper>
);

export default Scoreboard;
