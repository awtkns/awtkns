const HOMEPAGE = {
  coverHeight: 1,
  isHomepage: true,
  isCollapsed: false,
}

export const state = () => ({
  ...HOMEPAGE,
  title: ''
})

export const mutations = {
  setHomepage: (state) => {
    state.title = HOMEPAGE.title
    state.isHomepage = HOMEPAGE.isHomepage
    state.coverHeight = HOMEPAGE.coverHeight
  },
  setArticle: (state, article) => {
    state.title = article.title || 'NO NAME'
    state.isHomepage = false
    state.coverHeight = article.coverHeight || .2
  },
  setCollapsed: (state, isCollapsed) => state.isCollapsed = isCollapsed,
}

