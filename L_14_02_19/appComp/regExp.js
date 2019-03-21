const str = 'https://regex101.com/';
const reEmail = /^\w+@\w+\.\w+\b/;
const reNickName = /^@.+\b/;
const reUrl = /^https?:\/\/\w+\.\w+.\b/;

if (reEmail.exec(str) && str === reEmail.exec(str)[0]) {
  console.log('it is an e-mail');
} else if (reNickName.exec(str) && str === reNickName.exec(str)[0]) {
  console.log('It is a nickName');
} else if (reUrl.exec(str) && str === reUrl.exec(str)[0]) {
  console.log('It is an URL');
} else {
  console.log('It is some text');
}
