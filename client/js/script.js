

  var home = document.getElementById("HomeBlock");
  var blog = document.getElementById("BlogBlock");


function backToHome() {
    home.style.display = "block";
    blog.style.display = "none";
    document.getElementById('textJumbotron').innerHTML="9to5mac";
}

function goToBlog() {
    home.style.display = "none";
    blog.style.display = "block";
}


function refreshPage(){
    window.location.reload();
}

function showModal() {
    myModal = new mdb.Modal(document.getElementById('staticBackdrop'))
    myModal.show()
}

// document.getElementById("btnModal").addEventListener("click", async function() {
//     try{
//       let response = await fetch('http://127.0.0.1:8090/blog1');
//       if (response.ok) {
//         console.log("hi")
//         let body = await response.json();
//         document.getElementById('content').innerHTML=body.Type;
//         goToBlog()
//       }
//     } catch(e) {
//     //   alert(e);
//       showModal()
//       document.getElementById("exampleModal").modal('show');
//       document.getElementById('content').innerHTML="disconnected";
//     }
//   });

document.querySelectorAll(".Home").forEach(function (i) {
    i.addEventListener("click", function() {
        document.getElementById('commentPosted').style.display = "none";
        document.getElementById('commentAlert').style.display = "none";
        document.getElementById('mainContent').innerHTML=''
        backToHome()
    })
});

// document.querySelectorAll(`[class^="Blog"]`).forEach(function (i) {
//     i.addEventListener("click", async function() {
//         try{
//             console.log("sucess")
//             let response = await fetch('http://127.0.0.1:8090/blogs/1');
//             if (response.ok) {
//                 let body = await response.json();
//                 loadBlog(body)
//             }
//         } catch(e) {
//             showModal()
//             document.getElementById('content').innerHTML="disconnected";
//         }
//     })
// });

document.querySelectorAll(".Blog1").forEach(function (i) {
    i.addEventListener("click", async function() {
        try{
            let response = await fetch('http://127.0.0.1:8090/blogs/1');
            if (response.ok) {
                let body = await response.json();
                document.getElementById('formBlog').value="1";
                loadBlog(body)
            }
        } catch(e) {
            showModal()
            document.getElementById('content').innerHTML="disconnected";
        }
    })
});

document.querySelectorAll(".Blog2").forEach(function (i) {
    i.addEventListener("click", async function() {
        try{
            let response = await fetch('http://127.0.0.1:8090/blogs/2');
            if (response.ok) {
                let body = await response.json();
                document.getElementById('formBlog').value="2";
                loadBlog(body)
            }
        } catch(e) {
            console.log(e)
            showModal()
            document.getElementById('content').innerHTML="disconnected";
        }
    })
});


function loadBlog(body) {
    document.getElementById('textJumbotron').innerHTML= body.Title
    document.getElementById('publishDate').innerHTML= body.Date
    document.getElementById('typeColour').className= body.Type[0]
    document.getElementById('typeName').innerHTML= body.Type[1]
    document.getElementById('blogImg').src= body.Image
    document.getElementById('mainContent').innerHTML= body.Description

    authorID = body.AuthorID

    async function fetchAuthor(authorID) {
        try{
            let response = await fetch('http://127.0.0.1:8090/authors/' + authorID);
            if (response.ok) {
                let body = await response.json();

                document.getElementById('blogAuthorName').innerHTML= body.FullName
                document.getElementById('aboutAuthorName').innerHTML= body.FullName
                document.getElementById('blogAuthorImg').src= body.Image
                document.getElementById('aboutAuthorImg').src= body.Image
                document.getElementById('aboutAuthorTwitter').href= body.Twitter
                document.getElementById('aboutAuthorContent').innerHTML= body.Description


            }
        } catch(e) {
            console.log(e)
            showModal()
            document.getElementById('content').innerHTML="disconnected";
        }
    }

    fetchAuthor(authorID)



    commentTitle= "Comments: " + body.Comments.length

    let commentHTML = "<div class=\"text-center mb-3\"><p class=\"h5\"><strong>" + commentTitle + "</strong></p></div>"

    body.Comments.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) => {
            if (key == "Name") {
                commentName = value;
            } else if (key == "Text") {
                commentText = value;
            }
        });
        commentHTML += "<div class=\"card mb-4\"><div class=\"card-body\"><p class=\"small mb-0 mb-2\"><strong>" + commentName +
        "</strong></p><p class=\"small mb-0 ms-2\">" + commentText + "</p></div></div>"
    });

    document.getElementById('commentSection').innerHTML= commentHTML


    document.getElementById('content').innerHTML= authorID
    goToBlog()
}


// var elements = document.getElementsByClassName("Blog1");
// elements.addEventListener("click", function() {
//     console.log(elements)
//     console.log("hi")
// });


document.getElementById("notification").addEventListener("click", function() {
    document.getElementById('notificationNumber').style.display = "none";

});

// document.getElementById("commentSubmitBtn").addEventListener("click", function() {
//     // event.preventDefault();
//     document.getElementById('commentAlert').style.display = "block";
//     document.getElementById('formInputName').value = "";
//     document.getElementById('formInputComment').value = "";
//     document.getElementById("formComment").classList.remove('was-validated');
//     // document.getElementById('commentPosted').style.display = "block";

// });

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict';

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach((form) => {
      form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
    // document.getElementById('commentAlert').style.display = "block";
    // document.getElementById('formInputName').value = "";
    // document.getElementById('formInputComment').value = "";
    // document.getElementById("formComment").classList.remove('was-validated');
  })();


// document.getElementById("btnModal").addEventListener("click", function() {
//     console.log("hiiii");
// });


