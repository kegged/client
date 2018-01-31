export default ({ store, route, redirect }) => {
  if (!store.getters.isAuthenticated) {
    // redirect to login page and pass
    // callback url query for redirecting
    // upon authenticating
    redirect('/login?cbUrl=' + route.fullPath)
  }
}
