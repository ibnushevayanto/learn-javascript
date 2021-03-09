const button = document.querySelector('button')
const output = document.querySelector('p')

const getLocation = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(posData => {
      resolve(posData)
    }, error => {
      reject(error)
    }, opts)
  })
  return promise
}

const setTimer = (timer) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done')
    }, timer)
  })
  return promise
}

async function trackUserHandler() {

  // * Promise Explanation

  // let data
  // getLocation().then(posData => {
  //   data = posData
  //   return setTimer(2000)
  // }).then(resultApiDone => {
  //   console.log(resultApiDone, data)
  // }).catch(err => {
  //   console.log(err)
  // })

  // setTimer(1000).then(res => {
  //   console.log('timer done')
  // })

  // console.log('get location...')

  // * Async Await Explanation

  try {
    const posData = await getLocation()
    const timer = await setTimer(2000)
    console.log(timer, posData)
  } catch (error) {
    console.log(error)
  }

}

button.addEventListener('click', trackUserHandler)


// Promise.race([getLocation(), setTimer(1000)]).then(data => console.log(data))
// Promise.all([getLocation(), setTimer(1000)]).then(res => console.log(res))
// Promise.allSettled([getLocation(), setTimer(1000)]).then(res => console.log(res))