const HOMEPAGE = {
  title: ['Adam Watkins', 'Full-Stack Developer', 'Adam Watkins'],
  coverImage: 'hero.jpg',
  coverHeight: 1,
  isHomepage: true,
}

export const state = () => ({
  ...HOMEPAGE,
})

export const mutations = {
  setHomepage: (state) => state = HOMEPAGE,
  setArticle: (state, article) => {
    state.title = article.title
    state.isHomepage = false
    state.coverImage = article.hero
    state.coverHeight = .2
  }
}

