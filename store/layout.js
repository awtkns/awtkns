export const state = () => ({
  coverImage: 'hero2.jpg',
  coverHeight: 1,
  isHomepage: true,
})

export const mutations = {
  setCoverImage: (state, src) => state.coverImage = src,
  setCoverHeight: (state, percentage) => state.coverHeight = percentage,
  setHomepage: (state, isHomepage) => state.isHomepage = isHomepage,
}

