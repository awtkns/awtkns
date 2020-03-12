export const getPosts = async ({ $prismic }) => {
  const res = await $prismic.api.query(
    $prismic.predicates.at('document.type', 'post')
  )

  return res.results
}
