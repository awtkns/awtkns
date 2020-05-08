export const state = () => ({
  coverImage: 'hero.jpg',
  coverHeight: 1,
  isHomepage: true,
})

export const mutations = {
  setCoverImage: (state, src) => state.coverImage = src,
  setCoverHeight: (state, percentage ) => state.coverHeight = percentage
}

