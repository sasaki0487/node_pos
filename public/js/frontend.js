function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {'content-type': 'application/json'},
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', 
    referrer: 'no-referrer', 
  })
  .then(response => response.json().then(data => ({status: response.status, body: data})));
}

function getRegisterId(){
  postData('/getRegisterId', {})
  .then(data => {
    document.querySelector("#id").innerHTML = data.body.ID;
  })
  .catch(error => {
    alert(error);
  });
}

function register(){
  var data = {
        id: document.querySelector("#id").innerHTML,
        name: document.querySelector("#name").value,
        stock: document.querySelector("#stock").value,
        inPrice: document.querySelector("#inPrice").value,
        outPrice: document.querySelector("#outPrice").value
      };

      postData('/register', data)
      .then(data => {
        alert(data.body.res);
        if(data.status == '200'){
          postData('/getRegisterId',{})
          .then(data => {
            document.querySelector("#id").innerHTML = data.body.ID;
          })
          .catch(error => {
            alert(error);
          });
          document.querySelector("#name").value = '';
          document.querySelector("#stock").value = '';
          document.querySelector("#inPrice").value = '';
          document.querySelector("#outPrice").value = '';
        }
      })
      .catch(error => {
        alert(error);
      });
}

function update(){
  var data = {
    id: document.querySelector("#id").innerHTML,
    name: document.querySelector("#name").value,
    stock: document.querySelector("#stock").value,
    inPrice: document.querySelector("#inPrice").value,
    outPrice: document.querySelector("#outPrice").value
  };
  postData('update',data)
  .then(data => {
    alert(data.body.res);
  })
}

function remove(){
  postData('/delete', {id:document.querySelector('#id').innerHTML})
  .then(data => {
    if(data.status == '200'){
      alert(data.body.res);
      window.location.href='/search';
    }
  })
  .catch(error => {
    alert(error);
  });
}

function login(){
  postData('/auth',{
    username: document.querySelector("input[name='username']").value,
    password: document.querySelector("input[name='password']").value
  })
  .then(data => {
    if(data.status == '200'){
      window.location.href = "/";
    }
    else if(data.status == '400'){
      document.querySelector('#status').value = data.body.res;
    }
    else if(data.status == '401'){
      document.querySelector('#status').value = data.body.res;
    }
  })
  .catch(error =>{
    alert(error);
  });

}

