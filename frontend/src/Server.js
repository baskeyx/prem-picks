const Server = process.env.NODE_ENV === 'development'
  ? 'http://localhost:8080'
  : 'https://prem-picks.herokuapp.com';

export default Server;
