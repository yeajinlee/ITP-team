var express = require('express');
var router = express.Router();

//http://localhost:3000/guestbook
/* GET home page. */

data = [
    {id:0, title:"제목1", writer:"홍길동1", contents:"내용1"},
    {id:1, title:"제목2", writer:"홍길동2", contents:"내용2"},
    {id:2, title:"제목3", writer:"홍길동3", contents:"내용3"},
    {id:3, title:"제목4", writer:"홍길동4", contents:"내용4"},
    {id:4, title:"제목5", writer:"홍길동5", contents:"내용5"},
    {id:5, title:"제목6", writer:"홍길동6", contents:"내용6"},
    {id:6, title:"제목7", writer:"홍길동7", contents:"내용7"},
    {id:7, title:"제목8", writer:"홍길동8", contents:"내용8"},
    {id:8, title:"제목9", writer:"홍길동9", contents:"내용9"},
    {id:9, title:"제목10", writer:"홍길동10", contents:"내용10"}
]

//라우터 use(get, post다 받고), get, post, put, delete 
router.get('/', function(req, res, next) {
  res.send({data:data, totalCount:data.length} );
});

//insert 추가하기 
router.post('/insert', function(req, res, next){
    var body = req.body; 
    
    var title = body.title;
    var contents=body.contents;
    var writer = body.writer;

    console.log( title, writer, contents);

    var temp = {id:data.length, title:title, writer:writer, contents:contents};
    res.send("success");

    data.push( temp );
});

//url ,함수(request객체, response객체, next )
//next - 연쇄적으로 처리할때 다음 함수를 호출할 수 있다 
// 주소를 받아옴
router.get('/view/:id', function(req, res, next){
    // :id 값  req.params.id, post 온 데이터는 req.body.id 
    var id =  req.params.id; 
    res.send( data[id] );
})



router.post('/update', function(req, res, next){
    var body = req.body; 
    var id = body.id;
    var title = body.title;
    var contents=body.contents;
    var writer = body.writer;

    console.log( id, title, writer, contents);
    id = parseInt(id);

    console.log( data[id] );
    data[id].title = title; 
    //data[id].writer = write; 
    //data[id].contents = contents; 
    console.log( data);

    res.send("success");
});

module.exports = router;

