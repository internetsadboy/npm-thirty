### npm-thirty

Web app that reports and visualizes npm pkg download history

### Architecture
* rest service (node)
* web client (angular, handlebars)
* db (mongo)
* visualizations (d3)
* storage (fs)
* poller (dedicated process, 4 polls per day)

### API

`poll`

Polls are oriented around dates.

Schema
* `poll` {object}
* `day` {number} daily pkg downloads
* `week` {number} weekly pkg downloads
* `monthly` {number} monthly pkg downloads
* `total` {number} total npm pkgs

`:date`

Refer to date specific npm pkg download data

Schema
* `:date` {string}
* formatting: YYYY-MM-DD (e.g. 2014-08-26)

#### /poll

`GET /poll`

Returns a json consisting of real-time npm pkg download data (day, week, month, total)

`POST /poll`

Create a new npm pkg download entry

`GET /poll/:date`

Returns a json of date specific npm pkg download data

`PUT /poll/:date`

Updates a poll (e.g. add an additional entry for the day)

`DELETE /poll/:date`

Removes a poll

`GET /poll/:from/:to`

Return a range of npm pkg download data
Where `from` refers to the starting date
And `to` refers to the ending date
