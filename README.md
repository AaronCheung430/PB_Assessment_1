# PB_Assessment_1
My first ever full-stack project.

# Blogging Service API

This Blogging API can be used to programmatically retrieve and post data to the Blogging service.

For better reading experience, please visit [Blogging Service API Documentation online (Postman)](https://documenter.getpostman.com/view/19198934/UVe9QUWX)

<!--- If we have only one grouop/collection, then no need for the "ungrouped" heading -->
- [PB_Assessment_1](#pb_assessment_1)
- [Blogging Service API](#blogging-service-api)
    - [1. Add blog](#1-add-blog)
        - [I. Example Request: 200 Success - Add new blog](#i-example-request-200-success---add-new-blog)
        - [I. Example Response: 200 Success - Add new blog](#i-example-response-200-success---add-new-blog)
        - [II. Example Request: 400 Bad Request - Invalid blog](#ii-example-request-400-bad-request---invalid-blog)
        - [II. Example Response: 400 Bad Request - Invalid blog](#ii-example-response-400-bad-request---invalid-blog)
    - [2. Add comment](#2-add-comment)
        - [I. Example Request: 200 Success - Add new comment](#i-example-request-200-success---add-new-comment)
        - [I. Example Response: 200 Success - Add new comment](#i-example-response-200-success---add-new-comment)
        - [II. Example Request: 400 Bad Request - Invalid comment](#ii-example-request-400-bad-request---invalid-comment)
        - [II. Example Response: 400 Bad Request - Invalid comment](#ii-example-response-400-bad-request---invalid-comment)
    - [3. Get author's info](#3-get-authors-info)
        - [I. Example Request: 200 Succes - Get Author 2's Info](#i-example-request-200-succes---get-author-2s-info)
        - [I. Example Response: 200 Succes - Get Author 2's Info](#i-example-response-200-succes---get-author-2s-info)
        - [II. Example Request: 400 Bad Request - Invalid authorID](#ii-example-request-400-bad-request---invalid-authorid)
        - [II. Example Response: 400 Bad Request - Invalid authorID](#ii-example-response-400-bad-request---invalid-authorid)
    - [4. Get blog's details](#4-get-blogs-details)
        - [I. Example Request: 200 Success - Get blog 1's details](#i-example-request-200-success---get-blog-1s-details)
        - [I. Example Response: 200 Success - Get blog 1's details](#i-example-response-200-success---get-blog-1s-details)
        - [II. Example Request: 400 Bad Request - Invalid blogID](#ii-example-request-400-bad-request---invalid-blogid)
        - [II. Example Response: 400 Bad Request - Invalid blogID](#ii-example-response-400-bad-request---invalid-blogid)
    - [5. Search for authors](#5-search-for-authors)
        - [I. Example Request: 200 Success - Exist query](#i-example-request-200-success---exist-query)
        - [I. Example Response: 200 Success - Exist query](#i-example-response-200-success---exist-query)
        - [II. Example Request: 200 Success - Empty query](#ii-example-request-200-success---empty-query)
        - [II. Example Response: 200 Success - Empty query](#ii-example-response-200-success---empty-query)
        - [III. Example Request: 200 Success - Invalid query](#iii-example-request-200-success---invalid-query)
        - [III. Example Response: 200 Success - Invalid query](#iii-example-response-200-success---invalid-query)
    - [6. Search for blogs](#6-search-for-blogs)
        - [I. Example Request: 200 Success - Exist query](#i-example-request-200-success---exist-query-1)
        - [I. Example Response: 200 Success - Exist query](#i-example-response-200-success---exist-query-1)
        - [II. Example Request: 200 Success - Empty query](#ii-example-request-200-success---empty-query-1)
        - [II. Example Response: 200 Success - Empty query](#ii-example-response-200-success---empty-query-1)
        - [III. Example Request: 200 Success - Invalid query](#iii-example-request-200-success---invalid-query-1)
        - [III. Example Response: 200 Success - Invalid query](#iii-example-response-200-success---invalid-query-1)


--------



### 1. Add blog


Add a new blog. Only one blog is allowed to submit in a single request.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://127.0.0.1:8090/blogs/new
```



***Body:***

```js
{
      "Title": "iPhone 14 Pro now rumored to feature ???hole + pill design??? instead of notch",
      "AuthorID": 4,
      "Date": "12.01.2022",
      "Type": [
        "text-primary",
        "<i class=\"fas fa-comment\"></i> Rumors"
      ],
      "Image": "img/iPhone-14.jpg",
      "Brief": "Your HTML code",
      "Description": "Your HTML code",
      "Comments": []
    }
```



***More example Requests/Responses:***


##### I. Example Request: 200 Success - Add new blog



***Body:***

```js
{
      "Title": "iPhone 15 Pro now rumored to feature ???hole + pill design??? instead of notch",
      "AuthorID": 4,
      "Date": "12.01.2023",
      "Type": [
        "text-primary",
        "<i class=\"fas fa-comment\"></i> Rumors"
      ],
      "Image": "img/iPhone-15.jpg",
      "Brief": "Your HTML code",
      "Description": "Your HTML code",
      "Comments": []
    }
```



##### I. Example Response: 200 Success - Add new blog
```js
Blog8
```


***Status Code:*** 200

<br>



##### II. Example Request: 400 Bad Request - Invalid blog



***Body:***

```js
{}
```



##### II. Example Response: 400 Bad Request - Invalid blog
```js
Invalid blog
```


***Status Code:*** 400

<br>



### 2. Add comment


Add a new comment in the specified blog. Only one comment is allowed to submit in a single request.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://127.0.0.1:8090/comments/new
```



***Body:***

```js
{"Blog": "1", "Name": "Steven",  "Text": "I can't wait for the new iPhone 14!!!"}
```



***More example Requests/Responses:***


##### I. Example Request: 200 Success - Add new comment



***Body:***

```js
{"Blog": "1", "Name": "Steven",  "Text": "I can't wait for the new iPhone 14!!!"}
```



##### I. Example Response: 200 Success - Add new comment
```js
{
    "Title": "iPhone 14 Pro now rumored to feature ???hole + pill design??? instead of notch",
    "AuthorID": 1,
    "Date": "12.01.2022",
    "Type": [
        "text-primary",
        "<i class=\"fas fa-comment\"></i> Rumors"
    ],
    "Image": "img/iPhone-14.jpg",
    "Brief": "A handful of rumors over the past several months have indicated that Apple plans on ditching the notch design with this year???s iPhone 14 Pro. Initially, it was reported that Apple would adopt a hole-punch design to house the camera, but now reliable analyst Ross Young says that Apple will use a ???hole + pill design??? on the iPhone 14 Pro and iPhone 14 Pro Max.",
    "Description": "<p> A handful of rumors over the past several months have indicated that Apple plans on ditching the notch design with this year???s <a href=\"https://9to5mac.com/2021/12/03/iphone-14-features-roundup/\" target=\"_blank\">iPhone 14 Pro</a>. Initially, it was reported that Apple would adopt a hole-punch design to house the camera, but now <a href=\"https://twitter.com/DSCCRoss/status/1481306555857481731\" target=\"_blank\">reliable analyst Ross Young</a> says that Apple will use a ???hole + pill design??? on the iPhone 14 Pro and iPhone 14 Pro Max. </p> <p> For those unfamiliar, Ross Young is an analyst for <a href=\"http://www.displaysupplychain.com\" target=\"_blank\">Display Supply Chain Consultants.</a> As such, his reporting is usually based on indications from the supply chain similar to analysts such as Ming-Chi Kuo. He???s proven to be extremely reliable over the past year, including being the sole analyst to report that the 2021 MacBook Pros would <a href=\"https://9to5mac.com/2021/10/12/m1x-macbook-pros-120hz-mini-led/\" target=\"_blank\">feature mini-LED displays with ProMotion.</a> </p> <p> Young reports today that this design will be unique to Apple, similar to the notch. On the flip side, a simple hole-punch design would have been very similar to the designs used by Android manufacturers like Huawei and Samsung. </p> <p class=\"note note-light\"> We now believe Apple will have a hole + pill design on the iPhone 14 Pro and Pro Max models. The smaller hole will not be invisible???The two hole concept will be unique to Apple, like the notch, not similar to all the pill models from Huawei. </p> <p> This design was first shared in a leaked schematic from an <a href=\"https://twitter.com/VNchocoTaco/status/1435980270608343050\" target=\"_blank\">anonymous Twitter account</a> last September. Young is now corroborating that this is the design Apple will use for the iPhone 14 Pro and iPhone 14 Pro Max. According to the anonymous Twitter account, the camera will be located on the right, while the Face ID system will be located on the left-hand side. </p> <h4><strong>9to5Mac???s Take</strong></h4> <p> This design is certainly interesting. The combination of both a hole-punch and a pill-shaped cutout is still smaller than the current notch, albeit only barely. </p> <p> Reliable Apple analyst Ming-Chi Kuo was first to report that the iPhone 14 Pro and iPhone 14 Pro Max would feature a new hole-punch design instead of a notch. Since Kuo first reported this change, questions have centered on where all of the Face ID components would go. As a refresher, here???s everything currently housed in the notch: </p> <ul> <li>Infrared camera</li> <li>Flood illuminator</li> <li>Proximity sensor</li> <li>Ambient light sensor</li> <li>Microphone</li> <li>Front camera</li> <li>Dot projector</li> </ul> <p> This combination hole-punch and pill-shaped cutout would seemingly give Apple more room to fit all of these components outside of the notch. Remember that with the iPhone 13 this year, Apple did <a href=\"https://9to5mac.com/2021/09/14/iphone-13-notch-smaller-but-bigger/\" target=\"_blank\">make the notch</a> slightly smaller in width, but slightly tapper in height. </p> <p> The iPhone 14 lineup is expected to be available in two different screen sizes: 6.1 inches and 6.7 inches. This could come in the form of the iPhone 14 and iPhone 14 Max, then the iPhone 14 Pro and iPhone 14 Pro Max. While the Pro models will reportedly get the new design, the other models will seemingly retain the notch. </p> <p> What do you think of this design? Would you prefer the notch, a single pill or single hole cutout, or this combo design? Let us know down in the comments. </p>",
    "Comments": [
        {
            "Name": "Gareth Moore",
            "Text": "That is ugly. I really can't see Apple doing that. A pill or a hole would be fine but not both."
        },
        {
            "Name": "BradP",
            "Text": "Apple is always ugly recently! Just name one product that is not ugly, can you?"
        },
        {
            "Name": "Kashif Nawaz",
            "Text": "Looking at Apple past record of useless notch on MacBook M1, I'll not be surprised if Apple release iPhone with pill+hole design."
        },
        {
            "Name": "YouMadBroda",
            "Text": "Useless notch?, I see you have no clue and don't own an M1 Mac because you'll see the extra screen you get by having the notch and the a bezel."
        },
        {
            "Name": "Steven",
            "Text": "I can't wait for the new iPhone 14!!!"
        }
    ]
}
```


***Status Code:*** 200

<br>



##### II. Example Request: 400 Bad Request - Invalid comment



***Body:***

```js
{}
```



##### II. Example Response: 400 Bad Request - Invalid comment
```js
Invalid comment
```


***Status Code:*** 400

<br>



### 3. Get author's info


The endpoint returns information about the author specified by the requested authorNumber.


***Endpoint:***

```bash
Method: GET
Type:
URL: http://127.0.0.1:8090/authors/:authorNumber
```



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| authorNumber |  | Required. An integer. Only one authorNumber is allowed in a single request. |



***More example Requests/Responses:***


##### I. Example Request: 200 Succes - Get Author 2's Info



##### I. Example Response: 200 Succes - Get Author 2's Info
```js
{
    "FullName": "Ben Lovejoy",
    "Image": "img/author/benLovejoy.jpeg",
    "Twitter": "https://twitter.com/benlovejoy",
    "Description": "Ben Lovejoy is a British technology writer and EU Editor for 9to5Mac. He???s known for his op-eds and diary pieces, exploring his experience of Apple products over time, for a more rounded review. He also writes fiction, with two technothriller novels, a couple of SF shorts and a rom-com!"
}
```


***Status Code:*** 200

<br>



##### II. Example Request: 400 Bad Request - Invalid authorID



##### II. Example Response: 400 Bad Request - Invalid authorID
```js
Invalid authorID
```


***Status Code:*** 400

<br>



### 4. Get blog's details


The endpoint returns details about the blog specified by the requested blogNumber.


***Endpoint:***

```bash
Method: GET
Type:
URL: http://127.0.0.1:8090/blogs/:blogNumber
```



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| blogNumber |  | Required. An integer. Only one blogNumber is allowed in a single request.
 |



***More example Requests/Responses:***


##### I. Example Request: 200 Success - Get blog 1's details



##### I. Example Response: 200 Success - Get blog 1's details
```js
{
    "Title": "iPhone 14 Pro now rumored to feature ???hole + pill design??? instead of notch",
    "AuthorID": 1,
    "Date": "12.01.2022",
    "Type": [
        "text-primary",
        "<i class=\"fas fa-comment\"></i> Rumors"
    ],
    "Image": "img/iPhone-14.jpg",
    "Brief": "A handful of rumors over the past several months have indicated that Apple plans on ditching the notch design with this year???s iPhone 14 Pro. Initially, it was reported that Apple would adopt a hole-punch design to house the camera, but now reliable analyst Ross Young says that Apple will use a ???hole + pill design??? on the iPhone 14 Pro and iPhone 14 Pro Max.",
    "Description": "<p> A handful of rumors over the past several months have indicated that Apple plans on ditching the notch design with this year???s <a href=\"https://9to5mac.com/2021/12/03/iphone-14-features-roundup/\" target=\"_blank\">iPhone 14 Pro</a>. Initially, it was reported that Apple would adopt a hole-punch design to house the camera, but now <a href=\"https://twitter.com/DSCCRoss/status/1481306555857481731\" target=\"_blank\">reliable analyst Ross Young</a> says that Apple will use a ???hole + pill design??? on the iPhone 14 Pro and iPhone 14 Pro Max. </p> <p> For those unfamiliar, Ross Young is an analyst for <a href=\"http://www.displaysupplychain.com\" target=\"_blank\">Display Supply Chain Consultants.</a> As such, his reporting is usually based on indications from the supply chain similar to analysts such as Ming-Chi Kuo. He???s proven to be extremely reliable over the past year, including being the sole analyst to report that the 2021 MacBook Pros would <a href=\"https://9to5mac.com/2021/10/12/m1x-macbook-pros-120hz-mini-led/\" target=\"_blank\">feature mini-LED displays with ProMotion.</a> </p> <p> Young reports today that this design will be unique to Apple, similar to the notch. On the flip side, a simple hole-punch design would have been very similar to the designs used by Android manufacturers like Huawei and Samsung. </p> <p class=\"note note-light\"> We now believe Apple will have a hole + pill design on the iPhone 14 Pro and Pro Max models. The smaller hole will not be invisible???The two hole concept will be unique to Apple, like the notch, not similar to all the pill models from Huawei. </p> <p> This design was first shared in a leaked schematic from an <a href=\"https://twitter.com/VNchocoTaco/status/1435980270608343050\" target=\"_blank\">anonymous Twitter account</a> last September. Young is now corroborating that this is the design Apple will use for the iPhone 14 Pro and iPhone 14 Pro Max. According to the anonymous Twitter account, the camera will be located on the right, while the Face ID system will be located on the left-hand side. </p> <h4><strong>9to5Mac???s Take</strong></h4> <p> This design is certainly interesting. The combination of both a hole-punch and a pill-shaped cutout is still smaller than the current notch, albeit only barely. </p> <p> Reliable Apple analyst Ming-Chi Kuo was first to report that the iPhone 14 Pro and iPhone 14 Pro Max would feature a new hole-punch design instead of a notch. Since Kuo first reported this change, questions have centered on where all of the Face ID components would go. As a refresher, here???s everything currently housed in the notch: </p> <ul> <li>Infrared camera</li> <li>Flood illuminator</li> <li>Proximity sensor</li> <li>Ambient light sensor</li> <li>Microphone</li> <li>Front camera</li> <li>Dot projector</li> </ul> <p> This combination hole-punch and pill-shaped cutout would seemingly give Apple more room to fit all of these components outside of the notch. Remember that with the iPhone 13 this year, Apple did <a href=\"https://9to5mac.com/2021/09/14/iphone-13-notch-smaller-but-bigger/\" target=\"_blank\">make the notch</a> slightly smaller in width, but slightly tapper in height. </p> <p> The iPhone 14 lineup is expected to be available in two different screen sizes: 6.1 inches and 6.7 inches. This could come in the form of the iPhone 14 and iPhone 14 Max, then the iPhone 14 Pro and iPhone 14 Pro Max. While the Pro models will reportedly get the new design, the other models will seemingly retain the notch. </p> <p> What do you think of this design? Would you prefer the notch, a single pill or single hole cutout, or this combo design? Let us know down in the comments. </p>",
    "Comments": [
        {
            "Name": "Gareth Moore",
            "Text": "That is ugly. I really can't see Apple doing that. A pill or a hole would be fine but not both."
        },
        {
            "Name": "BradP",
            "Text": "Apple is always ugly recently! Just name one product that is not ugly, can you?"
        },
        {
            "Name": "Kashif Nawaz",
            "Text": "Looking at Apple past record of useless notch on MacBook M1, I'll not be surprised if Apple release iPhone with pill+hole design."
        },
        {
            "Name": "YouMadBroda",
            "Text": "Useless notch?, I see you have no clue and don't own an M1 Mac because you'll see the extra screen you get by having the notch and the a bezel."
        }
    ]
}
```


***Status Code:*** 200

<br>



##### II. Example Request: 400 Bad Request - Invalid blogID



##### II. Example Response: 400 Bad Request - Invalid blogID
```js
Invalid blogID
```


***Status Code:*** 400

<br>



### 5. Search for authors


This endpoint returns authors information containing search_term.


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: http://127.0.0.1:8090/author
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| search_term |  | Query for searching authors. |



***More example Requests/Responses:***


##### I. Example Request: 200 Success - Exist query



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| search_term | Ben |  |



##### I. Example Response: 200 Success - Exist query
```js
[
    [
        "Author2",
        {
            "FullName": "Ben Lovejoy",
            "Image": "img/author/benLovejoy.jpeg",
            "Twitter": "https://twitter.com/benlovejoy",
            "Description": "Ben Lovejoy is a British technology writer and EU Editor for 9to5Mac. He???s known for his op-eds and diary pieces, exploring his experience of Apple products over time, for a more rounded review. He also writes fiction, with two technothriller novels, a couple of SF shorts and a rom-com!"
        }
    ],
    [
        "Author4",
        {
            "FullName": "Benjamin Mayo",
            "Image": "img/author/benjaminMayo.jpeg",
            "Twitter": "https://twitter.com/bzamayo",
            "Description": "Benjamin develops iOS apps professionally and covers Apple news and rumors for 9to5Mac. Listen to Benjamin, every week, on the Happy Hour podcast. Check out <a href=\"https://bzamayo.com\">his personal blog</a>. Message Benjamin over <a href=\"mailto:me@bzamayo.com\">email</a> or <a href=\"https://twitter.com/bzamayo\">Twitter</a>."
        }
    ]
]
```


***Status Code:*** 200

<br>



##### II. Example Request: 200 Success - Empty query



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| search_term |  |  |



##### II. Example Response: 200 Success - Empty query
```js
[]
```


***Status Code:*** 200

<br>



##### III. Example Request: 200 Success - Invalid query



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| search_term | Steven |  |



##### III. Example Response: 200 Success - Invalid query
```js
[]
```


***Status Code:*** 200

<br>



### 6. Search for blogs


This endpoint returns blogs information containing search_term.


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: http://127.0.0.1:8090/blog
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| search_term |  | Query for searching blogs. |



***More example Requests/Responses:***


##### I. Example Request: 200 Success - Exist query



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| search_term | Apple |  |



##### I. Example Response: 200 Success - Exist query
```js
[
    [
        "Blog1",
        {
            "Title": "iPhone 14 Pro now rumored to feature ???hole + pill design??? instead of notch",
            "AuthorID": 1,
            "Date": "12.01.2022",
            "Type": [
                "text-primary",
                "<i class=\"fas fa-comment\"></i> Rumors"
            ],
            "Image": "img/iPhone-14.jpg",
            "Brief": "A handful of rumors over the past several months have indicated that Apple plans on ditching the notch design with this year???s iPhone 14 Pro. Initially, it was reported that Apple would adopt a hole-punch design to house the camera, but now reliable analyst Ross Young says that Apple will use a ???hole + pill design??? on the iPhone 14 Pro and iPhone 14 Pro Max.",
            "Description": "<p> A handful of rumors over the past several months have indicated that Apple plans on ditching the notch design with this year???s <a href=\"https://9to5mac.com/2021/12/03/iphone-14-features-roundup/\" target=\"_blank\">iPhone 14 Pro</a>. Initially, it was reported that Apple would adopt a hole-punch design to house the camera, but now <a href=\"https://twitter.com/DSCCRoss/status/1481306555857481731\" target=\"_blank\">reliable analyst Ross Young</a> says that Apple will use a ???hole + pill design??? on the iPhone 14 Pro and iPhone 14 Pro Max. </p> <p> For those unfamiliar, Ross Young is an analyst for <a href=\"http://www.displaysupplychain.com\" target=\"_blank\">Display Supply Chain Consultants.</a> As such, his reporting is usually based on indications from the supply chain similar to analysts such as Ming-Chi Kuo. He???s proven to be extremely reliable over the past year, including being the sole analyst to report that the 2021 MacBook Pros would <a href=\"https://9to5mac.com/2021/10/12/m1x-macbook-pros-120hz-mini-led/\" target=\"_blank\">feature mini-LED displays with ProMotion.</a> </p> <p> Young reports today that this design will be unique to Apple, similar to the notch. On the flip side, a simple hole-punch design would have been very similar to the designs used by Android manufacturers like Huawei and Samsung. </p> <p class=\"note note-light\"> We now believe Apple will have a hole + pill design on the iPhone 14 Pro and Pro Max models. The smaller hole will not be invisible???The two hole concept will be unique to Apple, like the notch, not similar to all the pill models from Huawei. </p> <p> This design was first shared in a leaked schematic from an <a href=\"https://twitter.com/VNchocoTaco/status/1435980270608343050\" target=\"_blank\">anonymous Twitter account</a> last September. Young is now corroborating that this is the design Apple will use for the iPhone 14 Pro and iPhone 14 Pro Max. According to the anonymous Twitter account, the camera will be located on the right, while the Face ID system will be located on the left-hand side. </p> <h4><strong>9to5Mac???s Take</strong></h4> <p> This design is certainly interesting. The combination of both a hole-punch and a pill-shaped cutout is still smaller than the current notch, albeit only barely. </p> <p> Reliable Apple analyst Ming-Chi Kuo was first to report that the iPhone 14 Pro and iPhone 14 Pro Max would feature a new hole-punch design instead of a notch. Since Kuo first reported this change, questions have centered on where all of the Face ID components would go. As a refresher, here???s everything currently housed in the notch: </p> <ul> <li>Infrared camera</li> <li>Flood illuminator</li> <li>Proximity sensor</li> <li>Ambient light sensor</li> <li>Microphone</li> <li>Front camera</li> <li>Dot projector</li> </ul> <p> This combination hole-punch and pill-shaped cutout would seemingly give Apple more room to fit all of these components outside of the notch. Remember that with the iPhone 13 this year, Apple did <a href=\"https://9to5mac.com/2021/09/14/iphone-13-notch-smaller-but-bigger/\" target=\"_blank\">make the notch</a> slightly smaller in width, but slightly tapper in height. </p> <p> The iPhone 14 lineup is expected to be available in two different screen sizes: 6.1 inches and 6.7 inches. This could come in the form of the iPhone 14 and iPhone 14 Max, then the iPhone 14 Pro and iPhone 14 Pro Max. While the Pro models will reportedly get the new design, the other models will seemingly retain the notch. </p> <p> What do you think of this design? Would you prefer the notch, a single pill or single hole cutout, or this combo design? Let us know down in the comments. </p>",
            "Comments": [
                {
                    "Name": "Gareth Moore",
                    "Text": "That is ugly. I really can't see Apple doing that. A pill or a hole would be fine but not both."
                },
                {
                    "Name": "BradP",
                    "Text": "Apple is always ugly recently! Just name one product that is not ugly, can you?"
                },
                {
                    "Name": "Kashif Nawaz",
                    "Text": "Looking at Apple past record of useless notch on MacBook M1, I'll not be surprised if Apple release iPhone with pill+hole design."
                },
                {
                    "Name": "YouMadBroda",
                    "Text": "Useless notch?, I see you have no clue and don't own an M1 Mac because you'll see the extra screen you get by having the notch and the a bezel."
                }
            ]
        }
    ],
    [
        "Blog2",
        {
            "Title": "Apple TV+ set to produce Formula One racing movie starring Brad Pitt",
            "AuthorID": 4,
            "Date": "04.01.2022",
            "Type": [
                "text-dark",
                "<i class=\"fas fa-tv\"></i> TV+"
            ],
            "Image": "img/brad-pitt-apple-tv.jpg",
            "Brief": "Deadline reports that Apple is near to closing a deal for a racing film starring Brad Pitt. It???s unclear if Formula One will be officially involved in the project, although esteemed British F1 driver Lewis Hamilton is attached.",
            "Description": "<p> <a href=\"https://deadline.com/2022/01/brad-pitt-formula-one-racing-movie-apple-top-gun-maverick-joseph-kosinski-jerry-bruckheimer-ehren-kruger-1234887487/\" target=\"_blank\"> Deadline reports that Apple is near to closing a deal</a> for a racing film starring Brad Pitt. It???s unclear if Formula One will be officially involved in the project, although esteemed British F1 driver Lewis Hamilton is attached. </p> <p> The publication says the package is in the $130 million range, an enormous figure that has somehow become the norm for top movie deals of late as streamers fight out for top content. </p> <p> The news marks Apple???s second partnership with Brad Pitt. The Hollywood star is <a href=\"https://9to5mac.com/2021/09/30/apple-tv-continues-streak-of-big-budget-movie-deals-lands-film-starring-george-clooney-and-brad-pitt/\" target=\"_blank\">already attached to another big-budget Apple TV+ feature deal</a>, that will see Brad Pitt and George Clooney as lone-wolf fixers. </p> <p> For the racing film, Deadline says the film will show Pitt as a retired racer who decides to coach a younger driver to victory, for a final attempt at glory. The movie will be directed by Joseph Kosinski, director of the upcoming Top Gun film. </p> <p> Apple Original Films has racked up at least a dozen high-profile commissions over the last year or so, as <a href=\"https://tv.apple.com/?ign-itscg=30200&ign-itsct=tv_box_link\" target=\"_blank\">Apple TV+</a> ramps up its original content in pipeline. One of the most prestigious ??? and most expensive ??? Apple movies is Martin Scorsese???s ???Killers of the Flower Moon??? starring Leonardo DiCaprio, likely set to premiere later this year. </p>",
            "Comments": [
                {
                    "Name": "Joshua Agostino",
                    "Text": "Will he be cast as Mario in this movie too? <i class=\"far fa-grin-squint-tears\"></i>"
                },
                {
                    "Name": "JoeSmith",
                    "Text": "The only thing worse than Pitt being in an F1 movie is that perennial whiner Hamilton is also involved. I would love a decent F1 movie without either of those two being attached to it."
                },
                {
                    "Name": "Jetscreamer",
                    "Text": "Damn, Brad Pitt looks old."
                },
                {
                    "Name": "dzakary",
                    "Text": "I hope Susan Sarandon is in it, the plot sounds a lot like Bull Durham. Substitute baseball for F1."
                }
            ]
        }
    ],
    [
        "Blog3",
        {
            "Title": "Apple commemorates one year of M1 Macs with special T-shirt for engineers",
            "AuthorID": 1,
            "Date": "03.01.2022",
            "Type": [
                "text-danger",
                "<i class=\"fas fa-laptop\"></i> Mac"
            ],
            "Image": "/img/m1-shirt.jpg",
            "Brief": "2021 marked the first full year of Apple Silicon, and it was a highly successful year at that thanks to the new M1 iMac and all-new MacBook Pro lineup. To celebrate the success of the M1 chip so far, Apple gifted its engineers with a special M1 chip T-shirt...",
            "Description": "<p> 2021 marked the first full year of Apple Silicon, and it was a highly successful year at that thanks to the new M1 iMac and all-new MacBook Pro lineup. To celebrate the success of the M1 chip so far, Apple gifted its engineers with a special M1 chip T-shirt??? </p> <p> Andy Boretto, a senior software engineering manager at Apple, <a href=\"https://twitter.com/aboretto/status/1476977103702691840\" target=\"_blank\">took to Twitter to share</a> an image of the shirt and an accompanying note. ???Every so often, something comes along that changes everything,??? the note reads. ???Congratulations and thank you for helping make Apple M1 possible!??? </p> <p> Boretto added in his tweet that he???s proud to not only have worked on Apple???s transition from PowerPC to Intel, but also now the Intel to Apple Silicon transition as well. </p> <p> Of course, many of these engineers are getting more than just the special M1 chip T-shirt. As <a href=\"https://9to5mac.com/2021/12/28/apple-giving-top-employees-major-stock-bonuses-as-some-engineers-leave-for-meta/\" target=\"_blank\">Bloomberg reported last week</a>, Apple issued some of its top employees rare and lucrative stock bonuses at the end of the year. These bonuses reportedly ranged from $50,000 to as much as $180,000 in some cases, and silicon engineers were among those employees granted the bonus. </p> <p> Looking ahead to 2022, there are quite a few Apple Silicon-related announcements to expect, including new Mac Pro and iMac Pro hardware, a completely redesigned MacBook Air, and more. Check out our full roundup of everything to <a href=\"https://twitter.com/aboretto/status/1476977103702691840\" target=\"_blank\">expect from Apple in 2022 right here.</a> </p>",
            "Comments": [
                {
                    "Name": "Jetscreamer",
                    "Text": "That is ugly. I really can't see Apple doing that. A pill or a hole would be fine but not both."
                },
                {
                    "Name": "McWetty",
                    "Text": "???I designed a next generation computing chip and all I got was this shirt??????"
                }
            ]
        }
    ],
    [
        "Blog4",
        {
            "Title": "Apple Fitness+ invite users to celebrate New Year???s Day with new workouts",
            "AuthorID": 3,
            "Date": "27.12.2021",
            "Type": [
                "text-success",
                "<i class=\"fas fa-skiing\"></i> Fitness"
            ],
            "Image": "img/apple-fitness-2022.jpg",
            "Brief": "To celebrate Apple Fitness+???s first anniversary and its biggest expansion a few weeks ago, the app is inviting users to celebrate New Year with its instructors. <br> According to the app, new workouts and meditations inspired by the start of 2022 have arrived. For users, they just need to open the Fitness app to discover new sections, such as ???Best of 2021,??? ???Celebrate,\"...",
            "Description": "<p> To celebrate Apple Fitness+???s first anniversary and its biggest expansion a few weeks ago, the app is inviting users to celebrate New Year with its instructors. </p> <p> According to the app, new workouts and meditations inspired by the start of 2022 have arrived. For users, they just need to open the Fitness app to discover new sections, such as ???Best of 2021,??? ???Celebrate,??? as well as ???New Workouts??? and ???New Meditations.??? </p> <p> For the ???Best of 2021,??? Apple Fitness+ editors chose 45 different exercises that were recorded during 2021, which have different lengths and go from cycling to strength, meditations, and more. </p> <p> For the ???Celebrate??? section, which was created for ???Holiday cheer and reflections,??? there are 15 exercises with five new ones. These exercises are perfect to think about these past 12 months and prepare for New Year???s Day. </p> <p> There are 22 new workouts this week. Coincidence or not, you can take advantage of my personal favorite instructor, Ben, with his dancing lessons with throwback hits, including <a href=\"https://music.apple.com/br/album/chained-to-the-rhythm-feat-skip-marley/1395619660?i=1395620400&l=en\" target=\"_blank\">Katy Pery???s Chained to the Rhythm</a>. </p> <div class=\"text-center\"> <img src=\"img/apple-fitness-plus.jpg\" class=\"img-fluid shadow-2-strong rounded mb-4\" style=\"width: 70%\"/> </div> <p> For those who rather meditate, there are five new meditations. Two new sessions with JoAnna, one with Christian, Gregg, and Jessica. Each of them focuses on a different task: Awareness, Gratitude, Wisdom, Purpose, and Calm. </p> <p> Ever since November, <a href=\"https://9to5mac.com/2021/10/25/apple-fitness-to-launch-in-15-new-countries-on-november-3/\" target=\"_blank\">15 new regions have had access to Apple Fitness+</a>, which includes Austria, Brazil, Colombia, France, Germany, Indonesia, Ireland, Italy, Malaysia, Mexico, New Zealand, Portugal, Russia, Saudi Arabia, Spain, Switzerland, and the UAE. </p> <p> With iOS 15.1 released last month, Apple Fitness+ started featuring Group Workouts and Guided Meditation. With SharePlay, subscribers of the service can start a group workout or meditation with up to 32 of their friends and family while using FaceTime on an iPhone or iPad, and the selected Fitness+ session will stream completely in sync for every participant. </p> <p class=\"note note-light\"> Once on a FaceTime call, users will navigate to the Fitness app, select a workout or meditation, see their friends and family onscreen, and get started. SharePlay also works with Apple TV so users can follow the workout on a big screen while staying connected with friends on FaceTime using their iPhone or iPad. When working out in a group through SharePlay, users will see their metrics and progress toward closing their Activity rings, while also seeing and hearing friends. During a workout, when someone moves ahead on the Burn Bar or closes their Activity rings, everyone working out will be notified so they can celebrate together. </p> <p> To learn more about Apple Fitness+ and Apple One, click <a href=\"https://9to5mac.com/guides/apple-one/\" target=\"_blank\">here</a>. </p>",
            "Comments": [
                {
                    "Name": "Fred Ni",
                    "Text": "The invitation should come with 3 month free pass otherwise it is like me inviting everyone to my restaurant for dinner but they need to pay for their foods and drinks."
                }
            ]
        }
    ],
    [
        "Blog5",
        {
            "Title": "New York police warn residents after two alleged AirTag stalking incidents",
            "AuthorID": 1,
            "Date": "23.12.2021",
            "Type": [
                "text-secondary",
                "<i class=\"fas fa-tag\"></i> AirTag"
            ],
            "Image": "img/apple-airtag-stalking.jpg",
            "Brief": "Apple???s AirTags are again making headlines for being involved in a stalking incident. According to a report from local news outlet WGRZ, officers from the West Seneca Police Department in New York are warning that AirTags have been involved in a pair of alleged stalking cases over the last month...",
            "Description": "<p> Apple???s AirTags are again making headlines for being involved in a stalking incident. According to a report from local news outlet <a href=\"https://www.wgrz.com/article/news/crime/apples-airtags-used-to-follow-2-women-in-west-seneca-new-york/71-63eebdd2-ea05-40ef-8de2-44e74296edef\" target=\"_blank\">WGRZ</a>, officers from the West Seneca Police Department in New York are warning that AirTags have been involved in a pair of alleged stalking cases over the last month... </p> <p> In the first instance, which occurred last month, a woman went to the West Seneca Police Department after her iPhone presented a notification about an <a href=\"https://www.amazon.com/Apple-MX542AM-A-AirTag-Pack/dp/B0932QJ2JZ?crid=OLYFRISRZUBP&keywords=airtag&qid=1640269778&sprefix=airtag,aps,107&sr=8-3&linkCode=sl1&tag=9to5g-20&linkId=c7e550ecb62a16b145aaddeec0a1b233&language=en_US&ref_=as_li_ss_tl\" target=\"_blank\">AirTag</a> found moving with her. In this situation, officers found an AirTag ???under the bumper of the woman???s vehicle.??? </p> <p class=\"note note-light\"> ???A female came in and she got this message notification on her phone that there was an Apple AirTag or device moving with her, so she came to the station,??? West Seneca Lieutenant Jonathan Luterek said. <br> <br> Luterek says officers found an AirTag under the bumper of the woman???s vehicle. </p> <p> In the second instance this week, a different woman received the same notification on her iPhone. She then went to the police department, but officers were unable to locate an AirTag. </p> <p class=\"note note-light\"> ???Officers checked over her car pretty thoroughly and weren???t able to locate it. It disconnected shortly after, so at this point it???s really unknown if it was on the vehicle, or if her phone got alerted about something nearby,??? Luterek said. <br> <br> Officers do not believe the two cases are connected and say there is no reason to panic, but they do want to raise awareness. </p> <p> West Seneca Police say they have subpoenaed records from Apple to help them find out who was trying to track the woman last month. </p> <h4><strong>9to5Mac???s Take</strong></h4> <p> The most important thing to keep in mind here is that AirTags privacy features seem to be working as expected in these situations. In both instances, the women were alerted about a potential AirTag potential being nearby. This is an added precaution that other similar GPS trackers don???t offer. </p> <p> The biggest issue seems to be that these notifications don???t provide enough context for locating the AirTag. Theoretically, Apple should be able to provide that additional context in the notifications to make it easier to locate unknown AirTags. </p>",
            "Comments": [
                {
                    "Name": "The Amazing Iceman",
                    "Text": "The trackers from Tile have been around for a long time already. This problem should have already been a concern. So what makes thieves prefer to use AirTags instead?Or is it the media making a big deal just because it's made by Apple?"
                },
                {
                    "Name": "Whisker Kenbrook",
                    "Text": "\"The most important thing to keep in mind here is that AirTags privacy features seem to be working as expected in these situations.\" are you out of your minds? That's the most important thing? What about the rest of the world that DOESN'T HAVE AN iPHONE? THEY'RE AT RISK! THAT! THATs the most important thing."
                },
                {
                    "Name": "5723alex",
                    "Text": "There never were stalking incidents using Tile ?"
                },
                {
                    "Name": "NickName",
                    "Text": "Apple should just make it trivially easy to disable trackers through software when they???re traveling with you. ???This AirTag is traveling with you. Disable???? And you click ???Yes???. That way if it???s hidden under your car or whatever, you don???t have to crawl around trying to find it."
                },
                {
                    "Name": "Kim",
                    "Text": "If all iPhone-owners on the move are warned by \"An Airtag that is not yours, is moving with you\", then a thief stealing a tagged object will be warned with same message, and can then stop and get rid of the Airtag..."
                }
            ]
        }
    ],
    [
        "Blog6",
        {
            "Title": "Apple releases long-awaited Swift Playgrounds 4 with the ability to create apps using iPad",
            "AuthorID": 3,
            "Date": "15.12.2021",
            "Type": [
                "text-warning",
                "<i class=\"fas fa-code\"></i> Coding"
            ],
            "Image": "img/swift-playgrounds-4.jpg",
            "Brief": "After the release of iPadOS 15.2, Apple is finally releasing the long-awaited update to Swift Playgrounds with the ability to create apps using the iPad. <br> Swift Playgrounds 4 was announced back in June at WWDC 2021. The app helps developers and students learn the company???s Swift programming language...",
            "Description": "<p> <a href=\"https://9to5mac.com/2021/12/13/apple-releases-ios-15-2-watchos-8-3-and-tvos-15-2-to-all-users/\" target=\"_blank\">After the release of iPadOS 15.2</a>, Apple is finally releasing the long-awaited update to Swift Playgrounds with the ability to create apps using the iPad. </p> <p> Swift Playgrounds 4 was announced back in June at WWDC 2021. The app helps developers and students learn the company???s Swift programming language, and the new version lets developers build and submit apps to the App Store directly from an iPad. </p> <p> Last month, 9to5Mac showed a <a href=\"https://9to5mac.com/2021/11/29/heres-a-first-look-at-the-new-swift-playgrounds-4-ahead-of-official-release/\" target=\"_blank\">first look at the app</a> with some exclusive screenshots of the app running on iPadOS 15.2. Now, it???s finally out for any user to try. </p> <p> For those unfamiliar, <a href=\"https://www.apple.com/swift/playgrounds/\" target=\"_blank\">Swift Playgrounds</a> is an Apple app to help developers and students learn the company???s Swift programming language. Here???s how Apple describes the app: </p> <p class=\"note note-light\"> Swift Playgrounds is a great way to learn to code right on a Mac or iPad. With Swift Playgrounds 4, coming later this year, users will be able to create the visual design of an app with SwiftUI. App projects can be opened and edited in the app or in Xcode, and when they???re ready, users can build a real app and submit it directly to the App Store right from their iPad. </p> <div class=\"text-center\"><img src=\"img/Swift-Playgrounds-4-2.jpeg\" class=\"img-fluid shadow-2-strong rounded mb-4\" style=\"width: 70%\"/></div> <p> Although before WWDC21 users were expecting a proper Xcode application for the M1 iPad Pro, Apple surprised its customers with the Swift Playgrounds 4 announcement. </p> <p> This update also lets users preview and see changes in real-time as they type. Live editing also works when the developer shares the project with someone else via iCloud Drive, so multiple people can work on the same project at the same time. Users can even test the app on full screen, explore SwiftUI controls, search across all files in a project, use quick inline code suggestions, and easily switch between Swift Playgrounds and Xcode (or vice-versa). </p> <p> You can download or update Swift Playgrounds <a href=\"https://apps.apple.com/us/app/swift-playgrounds/id908519492\" target=\"_blank\">for your iPad here</a>. Just make sure you???re already running iPadOS 15.2. </p> <p> Here are the full release notes of the update on the iPad: </p> <ul> <li>Build iPhone and iPad apps with SwiftUl right on your iPad (requires iPadOS 15.2 or later)</li> <li>App Store Connect integration lets you upload your finished app to the App Store</li> <li>App Preview shows live updates as you make changes to your app</li> <li>Full-screen preview lets you see your app edge-to-edge</li> <li>Smart, inline code suggestions help you write code quickly and accurately</li> <li>App Projects make it easy to move projects to Xcode and back</li> <li>Project-wide search finds results across multiple files</li> <li>Snippets Library provides hundreds of SwiftUl controls, symbols, and colors</li> <li>Swift Package support lets you include publicly-available code to enhance your apps.</li> </ul>",
            "Comments": [
                {
                    "Name": "Jeroen",
                    "Text": "Now just enable us to harness the iPad M1 over Thunderbolt for additional compilation cores ;)"
                },
                {
                    "Name": "Just Need It For Dev",
                    "Text": "Nice, now if they would allow other languages and IDEs I would be able to do all of my work from an iPad."
                },
                {
                    "Name": "Greg Brown",
                    "Text": "Not sure I'd want that, even if it was an option. I do most of my dev work on an external monitor as it is. I think an iPad screen would be pretty restrictive."
                }
            ]
        }
    ],
    [
        "Blog7",
        {
            "Title": "Tim Cook emphasizes Apple???s new privacy features to European users",
            "AuthorID": 2,
            "Date": "15.06.2021",
            "Type": [
                "text-info",
                "<i class=\"fas fa-lock\"></i> Privacy"
            ],
            "Image": "img/Apples-privacy.jpg",
            "Brief": "CEO Tim Cook has highlighted Apple???s new privacy features to European users, with a new video on the Apple UK YouTube channel. <br>Cook tops and tails a six-minute video, which mostly comprises privacy-related clips from WWDC...",
            "Description": "<p> CEO <a href='https://9to5mac.com/guides/tim-cook/' target=\"_blank\">Tim Cook</a> has highlighted Apple???s new <a href=\"https://9to5mac.com/guides/privacy/\" target=\"_blank\">privacy</a> features to European users, with a new video on the Apple UK YouTube channel (embedded below). </p> <p> Cook tops and tails a six-minute video, which mostly comprises privacy-related clips from <a href=\"https://9to5mac.com/guides/wwdc-2021/\" target=\"_blank\">WWDC</a> ??? </p> <p> Apple likely chose to speak specifically to European users given the particular emphasis placed on privacy there. The European Union implemented the world???s toughest privacy law back in 2018, the <a href=\"https://9to5mac.com/2018/05/25/gdpr-apple/\" target=\"_blank\">General Data Protection Regulation</a> (GDPR). Even Apple had to strengthen its safeguards in order to meet the extremely high standards set by the law. </p> <p> While some companies comply with GDPR only in Europe, Apple committed to offering the same enhanced privacy standards to customers globally. </p> <p class=\"note note-light\"> Apple is continuing its leadership in privacy, expanding our commitment and encouraging positive change across the industry. WWDC 2021 included the announcement of a number of new privacy features across iOS 15, iPadOS 15, macOS Monterey, watchOS 8 and iCloud. These new features are designed to help users across Europe and around the world better control and manage access to their data. <br> <br> Watch the WWDC 2021 privacy presentation for some highlights of what???s new, and a special message from Tim to European users, directly from the Steve Jobs Theater in Apple Park. </p> <p> Cook <a href=\"https://www.youtube.com/watch?v=vu3_01y4sLk\" target=\"_blank\">opens</a> by highlighting two existing features ??? privacy nutrition labels and App Tracking Transparency ??? and then closes with a familiar wrap-up on the company???s ethos in this area. </p> <p class=\"note note-light\"> These new privacy features are the latest in a long stream of innovations our teams have developed to improve transparency, and put users in control of their data. They are features which will help give users peace of mind by strengthening their control, and the freedom to use technology without worrying about who is looking over their shoulder. At Apple, our commitment is to give users choice over how their data is used, and to build privacy and security into everything we make. </p> <p> The WWDC clips go into detail on the specifics of Apple???s new privacy features, highlighting Mail Privacy Protection, App Privacy Report, on-device speech-recognition, iCloud Private Relay, and Hide My Email. </p> <p> You can watch the video below. </p> <div class=\"ratio ratio-16x9\"> <iframe src=\"https://www.youtube.com/embed/vu3_01y4sLk\" title=\"YouTube video\" allowfullscreen ></iframe> </div>",
            "Comments": [
                {
                    "Name": "James Ruble",
                    "Text": "Apples new marketing for security is brilliant. Consumers are conscious of their digital foot print more than ever now. Apples announcements of improved security and additional features make it a great campaign to switch to Apple. I am sure there are company's that do it better, but for the 113 million iPhone users already in existence this is a great addition."
                },
                {
                    "Name": "Michael W. Perry",
                    "Text": "Do Apple's privacy features include strict limits on location tracking particularly by Apple itself? I've recently come to realize that location is the privacy feature above all others. To know where someone is at all times is to know who they are and what they do. I've been told by those who seem to know that Apple's location tracking is extensive and growing."
                }
            ]
        }
    ]
]
```


***Status Code:*** 200

<br>



##### II. Example Request: 200 Success - Empty query



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| search_term |  |  |



##### II. Example Response: 200 Success - Empty query
```js
[]
```


***Status Code:*** 200

<br>



##### III. Example Request: 200 Success - Invalid query



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| search_term | ProgrammingBlack |  |



##### III. Example Response: 200 Success - Invalid query
```js
[]
```


***Status Code:*** 200

<br>



---
[Back to top](#blogging-service-api)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2022-01-25 00:26:50 by [docgen](https://github.com/thedevsaddam/docgen)
