// define our post model
var PostModel = Backbone.Model.extend({
  defaults: {
    text: ''
  }
});

// define our posts collection
var PostsCollection = Backbone.Collection.extend({
  // tell our app that our PostsCollection expects
  // PostModels
  model: PostModel
});

// create a new instance of our post collection
var postsCollection = new PostsCollection();

// create a new instance of our post model
var post1 = new PostModel({ text: 'post one'});

// add post1 to our post collection
postsCollection.add(post1);

// add another post to our post collection, just in a different way
postsCollection.add({ text: 'post two'});

// add two new posts to our post collection, in a different fancy way
postsCollection.add([
  { text: 'post three' },
  { text: 'post four' }
]);