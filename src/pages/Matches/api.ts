/* eslint-disable import/prefer-default-export */
import api from '../../services/api';
import { IMatch } from '.';

export const finishedMatches = (setPastMatches: React.Dispatch<React.SetStateAction<IMatch[]>>) => {
  api.get('/matches')
    .then((response) => {
      setPastMatches(response.data.matches.map((match: any) => ({
        id: match.id,
        stage: match.stage.name,
        home: match.home.name,
        away: match.away.name,
        homeFlag: match.home.flag_url,
        awayFlag: match.away.flag_url,
        homeGoals: match.home.goals,
        awayGoals: match.away.goals,
        live: false,
        time: match.finished_at,
      })));
    });
};
