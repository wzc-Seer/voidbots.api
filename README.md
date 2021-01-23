# voidbots.api

### Docs
[Get votes](#get-votes)

### Get Votes
Get the votes from a bot by a specific user:
```js
const voidbots = require('voidbots.api');
const api = new voidbots('authkey') // You can get this on https://voidbots.net

console.log(api.getVotes(botId, userId)) // this will log the output
```