#Associations

##Intro to Associations
* Define associations
* Discuss one: one, one:many, and many:many relationships

##Embedding Data
User
Posts
Albums
Videos
Likes


##Referencing data
almost same with embedding version, but we just store related ids
* User
* Post

> db.users.find()
{ "_id" : ObjectId("5bb1a122ca35e42998611732"), "posts" : [ ], "name" : "watarus", "email" : "watarus.nt@yahoo.com", "__v" : 0 }
> db.users.find()
{ "_id" : ObjectId("5bb1a122ca35e42998611732"), "posts" : [ ObjectId("5bb1a1540295bb3b705fa025") ], "name" : "watarus", "email" : "watarus.nt@yahoo.com", "__v" : 1 }
> db.users.find()
{ "_id" : ObjectId("5bb1a122ca35e42998611732"), "posts" : [ ObjectId("5bb1a1540295bb3b705fa025") ], "name" : "watarus", "email" : "watarus.nt@yahoo.com", "__v" : 1 }
> db.users.find()
{ "_id" : ObjectId("5bb1a122ca35e42998611732"), "posts" : [ ObjectId("5bb1a1540295bb3b705fa025"), ObjectId("5bb1a16be48d5122c8261133") ], "name" : "watarus", "email" : "watarus.nt@yahoo.com", "__v" : 2 }
> db.posts.find()
{ "_id" : ObjectId("5bb1a122ca35e42998611733"), "title" : "Second reference post", "content" : "abcasdf34oisdfjiaodsf", "__v" : 0 }
{ "_id" : ObjectId("5bb1a1540295bb3b705fa025"), "title" : "1st reference post", "content" : "abcasdf34oisdfjiaodsf", "__v" : 0 }
{ "_id" : ObjectId("5bb1a16be48d5122c8261133"), "title" : "3rd reference post", "content" : "abcasdf34oisdfjiaodsf", "__v" : 0 }
> db.posts.find()
{ "_id" : ObjectId("5bb1a122ca35e42998611733"), "title" : "Second reference post", "content" : "abcasdf34oisdfjiaodsf", "__v" : 0 }
{ "_id" : ObjectId("5bb1a1540295bb3b705fa025"), "title" : "1st reference post", "content" : "abcasdf34oisdfjiaodsf", "__v" : 0 }
{ "_id" : ObjectId("5bb1a16be48d5122c8261133"), "title" : "3rd reference post", "content" : "abcasdf34oisdfjiaodsf", "__v" : 0 }
{ "_id" : ObjectId("5bb1a17cf174dc207444934c"), "title" : "4th reference post", "content" : "abcasdf34oisdfjiaodsf", "__v" : 0 }
> db.users.find()
{ "_id" : ObjectId("5bb1a122ca35e42998611732"), "posts" : [ ObjectId("5bb1a1540295bb3b705fa025"), ObjectId("5bb1a16be48d5122c8261133"), ObjectId("5bb1a17cf174dc207444934c") ], "name" : "watarus", "email" : "watarus.nt@yahoo.com", "__v" : 3 }
> db.users.find()
{ "_id" : ObjectId("5bb1a122ca35e42998611732"), "posts" : [ ObjectId("5bb1a1540295bb3b705fa025"), ObjectId("5bb1a16be48d5122c8261133"), ObjectId("5bb1a17cf174dc207444934c"), ObjectId("5bb1a19f77b57a1e44c1b43e") ], "name" : "watarus", "email" : "watarus.nt@yahoo.com", "__v" : 4 }


