// // define our post model
// var PostModel = Backbone.Model.extend({
//   defaults: {
//     text: '',
//     likes: null,
//     user: '' 
//   },

// });

// // define our posts collection
// var PostsCollection = Backbone.Collection.extend({
//   // tell our app that our PostsCollection expects
//   // PostModels
//   model: PostModel,
  
//   initialize: function () {
//     this.on('change:likes', function (post) {
//       console.log(post.toJSON());
//     });

//     this.on('add', function () {
//       console.log('add!');
//     });
//   },
// });

// var postsCollection = new PostsCollection();

// postsCollection.add([
//   { text: 'post one', likes: 2, user: 'Bob'},
//   { text: 'post two', likes: 16, user: 'Jim'},
//   { text: 'post three', likes: 34, user: 'Joe'},
//   { text: 'post four', likes: 23, user: 'Gus'},
//   { text: 'post five', likes: 11, user: 'Steve'},
//   { text: 'post six', likes: 13, user: 'Tim'}
// ]);