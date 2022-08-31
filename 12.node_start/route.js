// @ts-check

/**
 * Routing
 * 정의 : 네트워크 상에서 데이터를 보낼 때 최적의 경로를 선택하는 과정
*/

/**
 * @typedef Post
 * @property {number} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post[]} */
const posts = [{
  id: 1,
  title: '첫번째 블로그 글',
  content: '첫번째 내용입니다',
},
{
  id: 2,
  title: '두번째 블로그 글',
  content: '두번째 내용입니다',
},
{
  id: 3,
  title: '세번째 블로그 글',
  content: '세번째 내용입니다',
},
];

const routes = [
  // GET : 블로그 목록을 가져오는 API
  {
  url: '/posts',
  method: 'GET',
  id: 'undefined',
  callback: async () => ({
    statusCode: 200,
    body: {
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
      })),
      totalCount: posts.length,
      },
    }),
  },

  // GET : 특정 ID의 블로그 글을 가져오는 API 
  {
    url: '/posts',
    method: 'GET',
    id: 'number',
    callback: async (postId) => {
      const id = postId;
      if(!id) {
        return {
          statusCode: 404,
          body: 'Not found'
        };
      }

      const result = posts.find((post) => (post.id === id));

      if(!result) {
        return {
          statusCode: 404,
          body: 'ID Not found'
        };
      }

      return {
        statusCode: 200,
        body: result
      }
      },
    },

    // POST: 새로운 글을 쓰는 API 
    {
      url: '/posts',
      method: 'POST',
      id: 'undefined',
      callback: async (id, newPost) => {
        posts.push({
          title: newPost.title,
          content: newPost.constent,
        });
        return {
          statusCode: 200,
          body: 'post is uploaded'
        }
        },
      },

    // POST: 기존 글 수정하는 API 
    {
      url: '/posts',
      method: 'PUT',
      id: 'number',
      callback: async (id, newPost) => {
        if(!id){
          return {
            statusCode: 404,
            body: 'Not found',
          };
        }
        const result = posts.find((post) => (post.id === id));
        if(!result){
          return {
            statusCode: 404,
            body: 'Not found',
          };
        }
        const modifyPost = newPost;
        modifyPost.id = id;
        posts[id-1] = modifyPost;
        return {
          statusCode: 200,
          body: '글이 수정되었습니다'
        }
        },
      },

      // DELETE: 기존 글 삭제하는 API 
      {
        url: '/posts',
        method: 'DELETE',
        id: 'number',
        callback: async (id) => {
          if(!id){
            return {
              statusCode: 404,
              body: 'Not found',
            };
          }
          const result = posts.find((post) => (post.id === id));
          if(!result){
            return {
              statusCode: 404,
              body: 'Not found',
            };
          }
          posts.splice(id - 1, 1);
          return {
            statusCode: 200,
            body: 'post is DELETE'
          }
          },
        },
]


module.exports = { routes };