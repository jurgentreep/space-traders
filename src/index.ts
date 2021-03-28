require('dotenv').config()
import got from 'got';
import { FlightPlanResponse } from 'spacetraders-sdk/dist/types'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const headers = {
  'authorization': `Bearer ${process.env.ST_TOKEN}`
}

const shipId = 'ckmk9z4j31495121bs6gagc75xi'

;(async () => {
  while (true) {
    const response1 = await got.post(`https://api.spacetraders.io/users/${process.env.ST_USERNAME}/purchase-orders`, {
      headers,
      json: {
        shipId,
        good: 'FUEL',
        quantity: 2
      }
    }).json()
    console.log(response1)

    await delay(2000)

    const response2 = await got.post(`https://api.spacetraders.io/users/${process.env.ST_USERNAME}/purchase-orders`, {
      headers,
      json: {
        shipId,
        good: 'METALS',
        quantity: 298
      }
    }).json()
    console.log(response2)

    await delay(2000)

    const response3 = await got.post(`https://api.spacetraders.io/users/${process.env.ST_USERNAME}/flight-plans`, {
      headers,
      json: {
        shipId,
        destination: 'OE-PM'
      }
    }).json() as FlightPlanResponse
    console.log(response3)

    await delay(response3.flightPlan.timeRemainingInSeconds * 1000)

    await delay(2000)

    const response4 = await got.post(`https://api.spacetraders.io/users/${process.env.ST_USERNAME}/sell-orders`, {
      headers,
      json: {
        shipId,
        good: 'METALS',
        quantity: 298
      }
    }).json()
    console.log(response4)

    await delay(2000)
    
    const response5 = await got.post(`https://api.spacetraders.io/users/${process.env.ST_USERNAME}/purchase-orders`, {
      headers,
      json: {
        shipId,
        good: 'FUEL',
        quantity: 4
      }
    }).json()
    console.log(response5)

    await delay(2000)
    
    const response6 = await got.post(`https://api.spacetraders.io/users/${process.env.ST_USERNAME}/purchase-orders`, {
      headers,
      json: {
        shipId,
        good: 'SHIP_PLATING',
        quantity: 148
      }
    }).json()
    console.log(response6)

    await delay(2000)

    const response7 = await got.post(`https://api.spacetraders.io/users/${process.env.ST_USERNAME}/flight-plans`, {
      headers,
      json: {
        shipId,
        destination: 'OE-PM-TR'
      }
    }).json() as FlightPlanResponse
    console.log(response7)

    await delay(response7.flightPlan.timeRemainingInSeconds * 1000)

    await delay(2000)

    const response8 = await got.post(`https://api.spacetraders.io/users/${process.env.ST_USERNAME}/sell-orders`, {
      headers,
      json: {
        shipId,
        good: 'SHIP_PLATING',
        quantity: 148
      }
    }).json()
    console.log(response8)

    await delay(2000)
  }
})()