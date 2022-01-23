var home = document.getElementById("HomeBlock");
var blog = document.getElementById("BlogBlock");
var searchResult = document.getElementById("SearchResultBlock");


function backToHome() {
    home.style.display = "block";
    blog.style.display = "none";
    searchResult.style.display = "none";
    document.getElementById('textJumbotron').innerHTML="9to5mac";
    document.getElementById("commentForm").reset()
}

function goToBlog() {
    home.style.display = "none";
    blog.style.display = "block";
    searchResult.style.display = "none";
}

function goToSearchResult() {
    home.style.display = "none";
    blog.style.display = "none";
    searchResult.style.display = "block";
}

function refreshPage(){
    window.location.reload();
}

function showModal() {
    myModal = new mdb.Modal(document.getElementById('staticBackdrop'))
    myModal.show()
}

document.querySelectorAll(".Home").forEach(function (i) {
    i.addEventListener("click", function() {
        document.getElementById('commentPosted').style.display = "none";
        document.getElementById('commentAlert').style.display = "none";
        document.getElementById('mainContent').innerHTML=''
        backToHome()
    })
});

document.querySelectorAll(".showBlog").forEach(function (i) {
    i.addEventListener("click", async function() {
        try{
            blogID = i.classList.item(0)
            n = blogID.substring(4)
            let response = await fetch('http://127.0.0.1:8090/blogs/' + n);
            if (response.ok) {
                let body = await response.json();
                document.getElementById('numberBlogForm').value= n.toString();
                loadBlog(body)
            }
        } catch(e) {
            showModal()
        }
    })
});


// document.querySelectorAll(".Blog1").forEach(function (i) {
//     i.addEventListener("click", async function() {
//         try{
//             let response = await fetch('http://127.0.0.1:8090/blogs/1');
//             if (response.ok) {
//                 let body = await response.json();
//                 document.getElementById('numberBlogForm').value="1";
//                 loadBlog(body)
//             }
//         } catch(e) {
//             showModal()
//         }
//     })
// });


function loadBlog(body) {
    document.getElementById('textJumbotron').innerHTML= body.Title
    document.getElementById('publishDate').innerHTML= body.Date
    document.getElementById('typeColour').className= "text-end " + body.Type[0]
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
            showModal()
        }
    }

    fetchAuthor(authorID)

    loadComments(body)

    goToBlog()
};

function loadComments(body) {

    console.log(body.Comments.length)

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
}

// function loadSearch(body) {

//     document.getElementById('searchCover').src= body.Image
//     document.getElementById('searchBrief').innerHTML= body.Date
//     document.getElementById('typeColour').className= "text-end " + body.Type[0]

// };


// var input = document.getElementById("search-addon");
// document.getElementById("searchInput").addEventListener("keyup", function(event) {
//   if (event.key === 'Enter') {
//    event.preventDefault();
// //    document.getElementById('searchForm').submit()
//    alert('Hello World!')
//   }
// });


const sf = document.getElementById("searchForm")

sf.addEventListener("submit", async function(event) {
    event.preventDefault();
    const data = new FormData(sf);
    const params = new URLSearchParams(data);
    try{
        const response = await fetch('http://127.0.0.1:8090/blog?' + params);
        if (response.ok) {
            let body = await response.json();

            // document.getElementById('content').innerHTML = body;
            document.getElementById('textJumbotron').innerHTML= "Searches for: " + data.get('search_term');

            // loadSearch(body)
            if (body == "") {
                document.getElementById('searchResultSection').innerHTML = "<h2>Sorry, no matches were found. <br>Try a new search</h2>"
                goToSearchResult()
                return
            };

            let counter = 0
            let searchResultNumber = Object.keys(body).length
            let searchResultHTML = `<div class="row">`

            for (const blog of body) {

                // n = blog[0].substring(4)

                if (counter == 3 && searchResultNumber > 0) {
                    searchResultHTML += `</div><div class="row">`
                }

                searchResultHTML +=
                `
                <div class="col-lg-4 col-md-12 mb-4">
                  <div class="card">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                      <img src="${blog[1].Image}" class="img-fluid" id="searchCover"/>
                      <a href="#top">
                        <div class="` + blog[0] + ` SearchBlog mask" style="background-color: rgba(251, 251, 251, 0.15);" id=:"searchResultCard${blog[0]}"></div>
                    </a>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">${blog[1].Title}</h5>
                  <div class="row">
                    <div class="col-6">
                      <span class="${blog[1].Type[0]}">
                        <h6 class="h6 pb-1">${blog[1].Type[1]}</h6>
                        </span>
                      </div>
                      <div class="col-6 text-center text-muted">
                        <span class='text-muted'>
                          <h6><u> ${blog[1].Date}</u></h6>
                          </span>
                        </div>
                      </div>
                      <p class="card-text">${blog[1].Brief}</p>
                      <a href="#top" class="` + blog[0] + ` SearchBlog btn btn-primary" id="searchReadBtn">Read</a>
                    </div>
                  </div>
                </div>`

                counter += 1
                searchResultNumber -= 1
            };

            searchResultHTML += `</div>`
            document.getElementById('searchResultSection').innerHTML = searchResultHTML

            // console.log(searchResultHTML)

            goToSearchResult()

        };
    } catch(e) {
        console.log(e)
        showModal()
    };
});


document.addEventListener("DOMNodeInserted", () => {
    document.querySelectorAll(".SearchBlog").forEach(function (i) {
        i.addEventListener("click", async function() {
            console.log("You clicked")
            try{
                blogID = i.classList.item(0)
                n = blogID.substring(4)
                let response = await fetch('http://127.0.0.1:8090/blogs/' + n);
                if (response.ok) {
                    let body = await response.json();
                    document.getElementById('numberBlogForm').value= n.toString();
                    loadBlog(body)
                }
            } catch(e) {
                showModal()
            }
        })
    });
})

document.getElementById("notification").addEventListener("click", function() {
    document.getElementById('notificationNumber').style.display = "none";

});

const cf = document.getElementById("commentForm")

cf.addEventListener("submit", async function(event) {
    event.preventDefault();
    const data = new FormData(cf);
    const formData = JSON.stringify(Object.fromEntries(data.entries()))
    const blogID = data.get("Blog")
    try{
        const response = await fetch('http://127.0.0.1:8090/comments/new',
        {method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: formData});

        if (response.ok) {
            let body = await response.json();

            document.getElementById('commentSection').innerHTML= ""
            loadComments(body)

            document.getElementById("commentForm").reset()
            document.getElementById('numberBlogForm').value= blogID.toString();

            document.getElementById('commentAlert').style.display = "none";
            document.getElementById('commentPosted').style.display = "block";

        }

    } catch(e) {
        console.log(e)
        showModal()
    };

});

function validateForm() {
    var x = document.forms["commentForm"]["Name"].value;
    var y = document.forms["commentForm"]["Text"].value;
    if (x == "" || y == "")  {
        document.getElementById('commentAlert').style.display = "block";
        document.getElementById('commentPosted').style.display = "none";
    }
  }




