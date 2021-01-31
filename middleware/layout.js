export default ({ route, store }) => {
  if (route.path === '/') store.commit('layout/setHomepage')
}
