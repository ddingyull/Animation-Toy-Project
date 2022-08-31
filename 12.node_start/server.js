// @ts-check

const http = require('http'); /* 노드모듈에 이미 있는 경우 경로 작성 X */
const {
  routes
} = require('./route');
/**
 * @typedef Post
 * @property {number} id
 * @property {string} title
 * @property {string} content
 */

// post라는 타입은 객체이기 때문에 []를 추가해줄 것
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

// 서버 만들기
const server = http.createServer((req, res) => {
      // console.log('REQ URL', req.url);

      const urlArr = req.url ? req.url.split('/') : [];

      // let id = -1;
      let id;

      // console.log(urlArr);

      if (urlArr.length > 2) {
        id = parseInt(urlArr[2], 10);
      } else {
        id = undefined;
      }

      // route.js에서 가져와서 routing 시키기
      async function main() {
        const route = routes.find(
          (_route) =>
          req.url &&
          req.method &&
          req.url.search(_route.url) !== -1 &&
          _route.method === req.method &&
          typeof id === _route.id
        );
        
        res.setHeader('Contetn-Type', 'application/json; utf-8');

        if (!route) {
          console.log('해당 API를 찾을 수 없습니다.');
          res.statusCode = 404;
          res.end('Not Found');
        } else {
          let newPost;
          if (req.method === 'POST' || req.method === 'PUT') {
            newPost = await new Promise((resolve) => {
              req.setEncoding('utf-8');
              req.on('data', (data) => {resolve(data);});
              newPost.id = id;
              posts[id - 1] = newPost;
              posts.splice(id - 1, 1);
            });
          }
          const result = await route.callback(id, newPost);
          res.statusCode = result.statusCode;
          res.end(JSON.stringify(result.body));
        }
      }
      main();

    });

    const PORT = 4000;

    server.listen(PORT, () => {
      // console.log(`해당 서버는 ${PORT}번 포트에서 작동 중입니다.`);
    });

    /**
     * 블로그용 서버 API 구성
     *
     * GET /posts      => 목록 가져오기
     * GET /posts/:id  => 특정 글 내용 가져오기
     * POST /posts     => 새로운 글 올리기
     * PUT /posts/:id  => 기존 특정 글 수정하기
     * DELETE /posts/:id  => 기존 글 삭제하기
     */