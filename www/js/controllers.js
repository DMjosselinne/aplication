var firebaseConfig = {
    apiKey: "AIzaSyCtzD_d6_Rc0SN9NSqXTDcYnjxqcUEYW5g",
    authDomain: "maxapp-df7ce.firebaseapp.com",
    databaseURL: "https://maxapp-df7ce.firebaseio.com",
    projectId: "maxapp-df7ce",
    storageBucket: "maxapp-df7ce.appspot.com",
    messagingSenderId: "883374548975",
    appId: "1:883374548975:web:4f11acaedd03d0e3efb81a",
    measurementId: "G-PN5E88EJ6Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //base de datos
  var database = firebase.database();

angular.module('starter.controllers', [])

.controller("registroCtrl",function($scope){
  $scope.obtener = function(user){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.contra).then(function a(y){
      swal("se creo coorectamente YEAH")
        firebase.database().ref("/usuario").set()({
          correo: user.email
        })
         firebase.auth().singOut().then(function(){
        //sing-out successful.
        }).catch(function(error){
        //An error happened
      })
    }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    });

  }
})

//vista inicio
.controller("loginCtrl",function($scope){

})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});