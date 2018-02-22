export function register(sw) {
  return new Promise(async resolve => {
    if (!navigator.serviceWorker.controller) {
      // get existing registrations
      const registrations = await navigator.serviceWorker.getRegistrations()

      // unregister all
      await Promise.all(
        registrations.map(
          async registration => await registration.unregister(),
        ),
      )

      // fresh registration
      const { installing } = await navigator.serviceWorker.register(sw)
      installing &&
        installing.addEventListener('statechange', () => {
          installing.state === 'activated' && setTimeout(resolve, 0)
        })
    } else {
      // hot start
      navigator.serviceWorker.register(sw).then(resolve)
    }
  })
}

