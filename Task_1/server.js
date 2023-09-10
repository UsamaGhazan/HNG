import express from 'express';
const server = express();
import moment from 'moment/moment.js';

server.get('/api', (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;
  const currentDay = moment().format('dddd');
  const utcTime = moment().utc().format('YYYY-MM-DDTHH:mm:ss[Z]');

  res.json({
    slack_name: slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track: 'backend',
    github_file_url:
      'https://github.com/UsamaGhazan/HNG/blob/main/Task_1/server.js',
    github_repo_url: 'https://github.com/UsamaGhazan/HNG/tree/main',
    status_code: 200,
  });
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server is listening at Port ${PORT}`);
});
