export default ({ route, store }) => {
  if (route.path === '/') {
    store.commit('layout/setCoverHeight', 1)
    store.commit('layout/setCoverImage', 'hero.jpg')
    store.commit('layout/isHomepage', false)
  }
  else {
    store.commit('layout/setCoverHeight', .33)
    store.commit('layout/setCoverImage', 'melon.jpg')
    store.commit('layout/isHomepage', true)
  }
}
