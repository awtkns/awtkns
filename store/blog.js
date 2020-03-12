import { getPosts } from '~/api'

export const state = () => ({
  posts: []
})

export const getters = {
  getById: (state) => (id) => {
    return state.myStudies.find((study) => study.id === id)
  }
}

export const mutations = {
  setPosts: (state, posts) => (state.posts = posts)
}

export const actions = {
  async fetchPosts({ commit }) {
    commit('setPosts', await getPosts(this))
  }
}
