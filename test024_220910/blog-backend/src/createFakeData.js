import Post from './models/post';

export default function createFakeData() {
  // 0, 1, ... 39로 이루어진 배열을 생성한 후 포스트 데이터로 변환
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    // 자바스크립트 개발문서 내용을 복사
    body: `JavaScript (JS) is a lightweight, interpreted, 
      or just-in-time compiled programming language with first-class functions. 
      While it is most well-known as the scripting language for Web pages, 
      many non-browser environments also use it, such as Node.js, 
      Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, 
      multi-paradigm, single-threaded, dynamic language, supporting 
      object-oriented, imperative, and declarative (e.g. functional programming) 
      styles. Read more about JavaScript. 
      This section is dedicated to the JavaScript language itself, 
      and not the parts that are specific to Web pages or other host environments. 
      For information about API specifics to Web pages, please see Web APIs and DOM.
      The standards for JavaScript are the ECMAScript Language Specification 
      (ECMA-262) and the ECMAScript Internationalization API specification 
      (ECMA-402). The JavaScript documentation throughout MDN is based on the 
      latest draft versions of ECMA-262 and ECMA-402. And in cases where some 
      proposals for new ECMAScript features have already been implemented in 
      browsers, documentation and examples in MDN articles may use some of those 
      new features.Do not confuse JavaScript with the Java programming language. 
      Both "Java" and "JavaScript" are trademarks or registered trademarks of 
      Oracle in the U.S. and other countries. However, the two programming 
      languages have very different syntax, semantics, and use.`,
    tags: ['가짜', '데이터'],
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
