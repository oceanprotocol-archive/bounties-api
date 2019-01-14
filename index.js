const ms = require('ms')
const fetch = require('node-fetch')

let cacheGitcoin = null
let cacheBountiesNetwork = null
let cacheTotal = null

const getGitcoin = async () => {
    const response = await fetch('https://gitcoin.co/api/v0.1/bounties/?&org=oceanprotocol&is_open=true')

    const gitcoin = await response.json() // returns only open bounties by default

    return {
        data: gitcoin.length,
        lastUpdate: Date.now()
    }
}

const getBountiesNetwork = async () => {
    const response = await fetch('https://api.bounties.network/bounty/?search=ocean%20protocol&bountyStage=1&platform=bounties-network')

    const bountiesNetwork = await response.json()

    return {
        data: bountiesNetwork.results.length,
        lastUpdate: Date.now()
    }
}

const getTotal = async () => {
    const response = await fetch('https://api.bounties.network/bounty/?search=ocean%20protocol')

    const allBounties = await response.json()

    return {
        data: allBounties.count,
        lastUpdate: Date.now()
    }
}

//
// Create the response
//
module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')

    if (!cacheGitcoin || Date.now() - cacheGitcoin.lastUpdate > ms('5m')) {
        cacheGitcoin = await getGitcoin()
    }

    if (!cacheBountiesNetwork || Date.now() - cacheBountiesNetwork.lastUpdate > ms('5m')) {
        cacheBountiesNetwork = await getBountiesNetwork()
    }

    if (!cacheTotal || Date.now() - cacheTotal.lastUpdate > ms('5m')) {
        cacheTotal = await getTotal()
    }

    const response = {
        'gitcoin': cacheGitcoin.data,
        'bountiesNetwork': cacheBountiesNetwork.data,
        'total': cacheTotal.data
    }

    res.end(JSON.stringify(response))
}
