import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'https://marysaoleniuk.ghost.io',
  key: 'd8aa8110f15842f2847ba29bba',
  version: 'v3'
});

export async function getPosts() {
  return await api.posts
      .browse({
        limit: 'all',
        include: 'tags, authors'
      })
      .catch(err => {
        console.log(err);
      })
}


export async function getSinglePost(postSlug) {
  return await api.posts
  .read({
    slug: postSlug
  })
  .catch(err => {
    console.log(err);
  })
}


export async function getPage(pageSlug) {
  return await api.pages
  .read({
    slug: pageSlug
  })
  .catch(err => {
    console.log(err);
  })
}
