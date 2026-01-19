const xhr = new XMLHttpRequest();         //built in class for http transmission

xhr.addEventListener('load', ()=>{       //it adds event listners for the response to load , if the response loads then the function executed
   console.log(xhr.response);            //prints the response in the console
});

xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg');              //opens a connection between this computer and the computer whose url is used in the desired request type
xhr.send();                                    //used to send the http request
