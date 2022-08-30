// @ts-check

const http = require('http'); /* 노드모듈에 이미 있는 경우 경로 작성 X */
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

const server = http.createServer((req, res) => {
  console.log('REQ URL', req.url);

  const urlArr = req.url ? req.url.split('/') : [];

  let id = -1;

  console.log(urlArr);

  if (urlArr.length > 2) {
    id = parseInt(urlArr[2], 10);
  }
  // 목록가져오기
  if (req.url === '/posts' && req.method === 'GET') {
    const result = {
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
      })),
      totalCount: posts.length,
    };

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end(JSON.stringify(result));

    console.log('블로그의 글 목록을 보여줄 API 입니다');
  } else if (id !== -1 && req.method === 'GET') {
    const result = posts.find((post) => post.id === id);

    res.setHeader('ContentType', 'application/json; charset=utf-8')

    if (result) {
      console.log('블로그의 특정 id를 가지는 글의 내용을 보여주는 api입니다');
      res.statusCode = 200;
      res.end(JSON.stringify(result));
    } else {
      console.log('해당 post를 찾을 수 없었습니다');
      res.statusCode = 404;
      res.end('해당 post를 찾을 수 없었습니다');
    }
  } else if (req.url === '/posts' && req.method === 'POST') {
    req.setEncoding('utf-8');
    req.on('data', (data) => {
      const newPost = JSON.parse(data);
      posts.push({
        id: posts[posts.length - 1].id + 1,
        title: newPost.title,
        content: newPost.content,
      });
    });
    res.setHeader('ContentType', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end('새로운 글이 등록되었습니다.');

    console.log('블로그에 새로운 글 등록하는 api');
  } else if (id !== -1 && req.method === 'PUT') {
    req.setEncoding('utf-8');
    req.on('data', (data) => {
      const newPost = JSON.parse(data);
      newPost.id = id;
      posts[id - 1] = newPost;
    });
    res.setHeader('ContentType', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end(`${id}번째 글이 수정되었습니다`);

    console.log('블로그의 글 수정하는 api');
  } else if (id !== -1 && req.method === 'DELETE') {
    posts.splice(id - 1, 1);

    res.setHeader('ContentType', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end(`id번호가 ${id}인 포스트를 삭제 하였습니다`);
    console.log('블로그의 특정 글을 삭제하는 api 입니다.');
  } else {
    res.setHeader('ContentType', 'application/json; charset=utf-8');
    res.statusCode = 404;
    res.end('해당 api는 존재하지 않습니다');
    console.log('해당 api는 존재하지 않습니다');
  }
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`해당 서버는 ${PORT}번 포트에서 작동 중입니다.`);
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
/**
 * body의 타입을 읽을 수 있도록 header에 넣어주기
 * ex. ContentType를 보내면 application/json언어로 되어있고, charset=utf-8로 읽을 수 있어
 */