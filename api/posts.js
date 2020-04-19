import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'https://igoroleniuk-2.ghost.io',
  key: 'b1bf3b595ea19f3bed479dd354',
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
