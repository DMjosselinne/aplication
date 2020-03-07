var firebaseConfig = {
    apiKey: "AIzaSyCoPXbyVkcgNloGsOsrHaoQyfebCAiIWGM",
    authDomain: "maxapp-83f89.firebaseapp.com",
    databaseURL: "https://maxapp-83f89.firebaseio.com",
    projectId: "maxapp-83f89",
    storageBucket: "maxapp-83f89.appspot.com",
    messagingSenderId: "130542620022",
    appId: "1:130542620022:web:ab476af712b22651a17e57",
    measurementId: "G-X6BY82MYF5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //base de datos
  var database = firebase.database();

angular.module('starter.controllers', [])

.controller("registroCtrl",function($scope){
  $scope.obtener = function(user){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.contra).then(function a(y){
      swal("BIENVENIDO A NUESTRA FAMILIA ヽ(^o^)ノ")
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

.controller('DashCtrl', function($scope, $rootScope){
  $rootScope.categorias = [
    {
      nombrecategorias: "audio",
      imagen:"img/imagen1.jpg"
    },
    {
      nombrecategorias: "TV y Videos",
      imagen: "img/juego.jpg"
    },
    {
      nombrecategorias: "celulares",
      imagen: "img/celular.jpg"
    },
    {
      nombrecategorias: "computadoras y Tablets",
      imagen: "img/computadoras.png"
    },
    {
      nombrecategorias: "Cámaras y Drones",
      imagen:""
    },
    {
      nombrecategorias: "Prendas electronicas",
      imagen: ""
    },
    {
      nombrecategorias: "Electrodomésticos",
      imagen:""
    },
    {
      nombrecategorias: "videojuegos",
      imagen:""
    }
  ]
})

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
