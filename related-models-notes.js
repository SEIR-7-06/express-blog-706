/*
Different Types of Relationships

One-to-One Relationship

- A Human has one Brain
- A Town has one Mayor
- A Pilot has one Airplane
- A User has one Profile


One-to-Many Relationship

- A Tree has many Leaves
- A Cookbook has many Recipes
- An Engine has many Pistons
- A Gym has many Weights
- A House has many Rooms
- A Book has many Pages
- A household has many Pets
- A Library has many Books

Many-to-Many Relationship

- A Sudent has many Classes, and a Class has many Students
- A User could have many Talents, A Talent could be owned by many Users

Activity:
Draw out an ERD for our Blog Application
For our blog, an Author can have many Articles
*/

////////////////////////////////////////////////////////
// Dummy Data
const author1 = {
  _id: '20dk1dk103kfslf1540',
  firstName: 'Frank Herbert'
}

// Embedded Data
// Inserting the author data directly into the article object
const article1 = {
  _id: '40d9kfk240skfadf93f98',
  title: 'My Dog is the Best',
  content: 'My dog is the best because...',
  author: {
    _id: '20dk1dk103kfslf1540',
    authorName: 'Frank Herbert'
  }
}

// console.log(article1.author.authorName);

////////////////////////////////////////////////////////

const article2 = {
  title: 'Top 10 Recipes of 2021',
  content: 'asdf sadf asf asf asdf saf sfasdf',
  _id: '39d029304029340294d9a'
}

// Embedded Data
// Storing the article data directly in our author object
const author2 = {
  _id: '20dk1dk103kfslf1540',
  firstName: 'Dan Brown',
  articles: [
    {
      title: 'Top 10 Recipes of 2021',
      content: 'asdf sadf asf asf asdf saf sfasdf',
      _id: '39d029304029340294d9a'
    },
    {
      title: 'My Trip to Spain',
      content: 'asdf sadf asf asf asdf saf sfasdf',
      _id: '39d029304029340294d9a'
    },
    {
      title: 'My Favorite Vintage Video Games',
      content: 'asdf sadf asf asf asdf saf sfasdf',
      _id: '39d029304029340294d9a'
    },
  ]
}

console.log(author2.articles[0]);


///////////////////////////////////////////////////////////////////////
// Referenced Data
// Store a reference to author data in our article

const author1 = {
  _id: '20dk1dk103kfslf1540',
  firstName: 'Frank Herbert'
}

const article1 = {
  _id: '40d9kfk240skfadf93f98',
  title: 'My Dog is the Best',
  content: 'My dog is the best because...',
  author: '20dk1dk103kfslf1540'
}

const article2 = {
  _id: '40d9kfk240skfadf93f98',
  title: 'Cats are Better than Dogs!',
  content: 'asf asdf sa asdf as asfasfsf',
  author: '20dk1dk103kfslf1540'
}

// Activity:
// 1. Create an an author and an article
// 2. Store the author id as the author property in the article

//////////////////////////////////////////////////////////////////////////
// Referenced Data
// We are referencing the article ids directly in the author object

const author1 = {
  _id: '20dk1dk103kfslf1540',
  firstName: 'Frank Herbert',
  articles: [
    '40d9kfk240skfadf93f98',
    '40d9kfk240skfadf93f98'
  ]
}