export default ({ store, route, redirect }) => {
  if (store.getters.isAuthenticated) {
    // redirect home; authed user should
    // not view
    redirect('/')
  }
}
