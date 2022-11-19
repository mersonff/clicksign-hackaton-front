/* eslint-disable import/prefer-default-export */
import { Box, Paper } from '@mui/material';
import styled from '@emotion/styled';

export const ScoreboardPaper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  margin: 5,
  padding: 5,
  justifyItems: 'space-around',
});

export const HeaderBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifySelf: 'flex-start',
});

export const ContentBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});
