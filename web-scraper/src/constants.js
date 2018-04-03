import querystring from 'querystring';

const COMPETITION_ROUTE = 'competition.aspx';
const DIVISION_ID = '806';
const FIXTURE_ROUTE = 'teamdetails.aspx';
const SEASON_ID = '3196';
const SPORT_FIX_ID = '186ff05f-201d-46ea-bc7b-85dc3ba3fe70';
const SPORT_ID = '329';
const TEAM_ID = '91428';
const URL = 'https://sportfix.net/app/';

const fixtureOpts = {
  sportFixId: SPORT_FIX_ID,
  teamId: TEAM_ID
};

const competitionOpts = {
  div: DIVISION_ID,
  sea: SEASON_ID,
  sp: SPORT_ID
};

export const FIXTURE_URL =
  URL + FIXTURE_ROUTE + '?' + querystring.encode(fixtureOpts);

export const COMPETITION_URL =
  URL + COMPETITION_ROUTE + '?' + querystring.encode(ladderOpts);
