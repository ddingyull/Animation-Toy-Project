//@ts-check

const http = require('http');
const posts = [
  {
    id : 1,
    title : '첫번째 블로그 글',
    content: '첫번째 내용입니다',
  },
  {
    id : 2,
    title : '두번째 블로그 글',
    content: '두번째 내용입니다',
  },
];

const server = http.createServer((req, res) => {
  console.log('@', req.url);
  let urlArr = res.url ? res.url.split('/') : [];
  console.log(urlArr);

  let id = '-1';
  if(urlArr.length > 2){
    // [ , , id] = urlArr;
    id = urlArr[2];
  }

  console.log('id is', id);

  /**
   * 블로그용 서버 API 구성
   *
   * GET /posts      => 목록 가져오기
   * GET /posts/:id  => 특정 글 내용 가져오기
   * POST /posts     => 새로운 글 올리기
   * PUT /posts/:id  => 기존 특정 글 수정하기
   * DELETE /posts/:id  => 기존 글 삭제하기
   */
  if(req.url === '/posts' && req.method === 'GET') {
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
    console.log('목록 가져오기');
  } else if(urlArr[1] === 'posts' && req.method === 'GET') {
    res.statusCode = 200;
    console.log('특정 글 내용 가져오기');
  } else if(req.url === '/posts' && req.method === 'POST') {
    res.statusCode = 200;
    console.log('새로운 글 올리기');
  } else if(urlArr[1] === '/posts' && req.method === 'PUT') {
    res.statusCode = 200;
    console.log('기존 특정 글 수정하기');
  } else if(urlArr[1] === '/posts' && req.method === 'DELETE') {
    res.statusCode = 200;
    console.log('기존 글 삭제하기');
  } else {
    res.statusCode = 400;
    res.end('Not Found');
    console.log('해당 API를 찾을 수 없습니다');
  }
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`해당 서버는 ${PORT}번 포트에서 작동 중입니다`);
});

