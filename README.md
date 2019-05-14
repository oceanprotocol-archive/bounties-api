[![banner](https://raw.githubusercontent.com/oceanprotocol/art/master/github/repo-banner%402x.png)](https://oceanprotocol.com)

<h1 align="center">bounties-api</h1>

> Microservice to cache and expose Bounty data from Gitcoin & Bounties.network for use throughout [oceanprotocol.com](https://oceanprotocol.com).

[![Build Status](https://travis-ci.com/oceanprotocol/bounties-api.svg?branch=master)](https://travis-ci.com/oceanprotocol/bounties-api)
[![js oceanprotocol](https://img.shields.io/badge/js-oceanprotocol-7b1173.svg)](https://github.com/oceanprotocol/eslint-config-oceanprotocol)
[![Greenkeeper badge](https://badges.greenkeeper.io/oceanprotocol/bounties-api.svg)](https://greenkeeper.io/)
<img src="http://forthebadge.com/images/badges/powered-by-electricity.svg" height="20"/>
<img src="http://forthebadge.com/images/badges/as-seen-on-tv.svg" height="20"/>
<img src="http://forthebadge.com/images/badges/uses-badges.svg" height="20"/>

---
### Deprecated. Please use https://github.com/oceanprotocol/community-numbers
---

## API

Endpoint: [`https://oceanprotocol-bounties.now.sh`](https://oceanprotocol-bounties.now.sh)

### GET /

**200**: Returns the count of open bounties, and a `total` number counting all active and completed bounties:

```json
{
  "gitcoin": 1,
  "bountiesNetwork": 2,
  "total": 17
}
```

## Development

Install dependencies:

```bash
npm install
```

And run the server:

```bash
npm run dev
```

## Test

Run the tests:

```bash
npm test
```

## Deployment

Deploy to [now](https://zeit.co/now), make sure to switch to Ocean Protocol org before deploying:

```bash
# first run
now login
now switch

# deploy
now
# switch alias to new deployment
now alias
```

## Authors

- Matthias Kretschmann ([@kremalicious](https://github.com/kremalicious)) - [Ocean Protocol](https://oceanprotocol.com)
