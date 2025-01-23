const utils = require('utils-phuonghv');
const refCode = "SMAqnW2q";

async function registerWallet(walletAddress, proxy) {
    const url = `https://dashboard.layeredge.io/api/proxy/register-wallet/${refCode}`
    const body = {
        "walletAddress": walletAddress
    }
    const res = await utils.sendPostAsync(url, body, {}, proxy)
    console.log(res)
}

async function claimDailyReward(walletAddress, proxy) {
    // do it after
}

async function main() {
    const lines = utils.readFile("wallets.txt")
    for(const line of lines){
        const [walletAddress, proxy] = line.split(",")
        await registerWallet(walletAddress, proxy)
    }
}

main()
