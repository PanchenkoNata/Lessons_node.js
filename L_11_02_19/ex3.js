
function writeRequestFromRoute(url) {
    let req = new XMLHttpRequest();

    //handler of server response
    req.onreadystatechange = () => {
        if (req.readyState == 4) {
            //request is finished

            if (req.status == 200) {
                console.log(req.responseText);
            }
        }
    }

    //open connection
    req.open('GET', url, true);
    //send request
    req.send();
}


fetch(url)
  .then ((response) => {
      console.log(response.text());
  });











//   fetch('/article/fetch/user.json')
//   .then(function(response) {
//     alert(response.headers.get('Content-Type')); // application/json; charset=utf-8
//     alert(response.status); // 200

//     return response.json();
//    })
//   .then(function(user) {
//     alert(user.name); // iliakan
//   })
//   .catch( alert );