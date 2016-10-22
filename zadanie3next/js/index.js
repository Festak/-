var notes = [
  {
      Text: 'Note Title',
      Color: 'Note Content',
      Id: 1,
      X: 0,
      Y: 0,
      ImageType: ""
  }
];

angular.module('stieckiesApp', [])
  .controller('MainController', ['$scope','$http',function ($scope, $http) {
      $scope.notes = {};
      $scope.x = 0;
      $scope.y = 0;
     
      $http.get('/Home/getNotes').success(function (result) {
          $scope.notes = result;
      })
               .error(function (data) {
                   console.log(data);
               });

      $scope.noteCount = notes.length;
      $scope.statusMessage = '';

      $scope.getText = function (text) {
          console.log(text);
      }

      $scope.initById = function (note) {
          console.log(note.Text);
      }

      $scope.addNote = function () {
          $scope.note = {};
          $scope.note.Text = "Default Value";
          $scope.note.Color = "pink";
          $scope.note.ImageType = "";
          $scope.note.X = getX();
          $scope.note.Y = getY()-50;
          //   $scope.Employe.Emp_Age = $scope.EmpAge;

          $http.post('/Home/InsertNote', JSON.stringify($scope.note))
          .then(function(response){
              $http.get('/Home/getNotes').success(function (result) {
                  $scope.notes = result;
              })
              .error(function (data) {
                  console.log(data);
              });

              $scope.Text = "";
              $scope.Color = "";
              
          //    $scope.EmpAge = "";
          })
      }
 
      $scope.loadImage = function (src) {
          console.log(src);
      }

      $scope.deleteNote = function (note) {
          console.log(note);
          $http.post("/Home/DeleteNote", { id: note }).success(function (responseData) {
              $scope.notes = {};
              $scope.notes = responseData;

          })
      
      }

      $scope.updateNotePos = function (note) {
          note.X = getX();
          note.Y = getY() - 50;
          console.log(note.X);
          console.log(note.Y);
          $http.post("/Home/UpdateNotePos", { id: note }).then(function (responseData) {
              $http.get('/Home/getNotes').success(function (result) {
                  $scope.notes = {};
                  $scope.notes = result;
              })
               .error(function (data) {
                   console.log(data);
               });
          })
      }
     
      $scope.updateNote = function (note, text) {
          note.Text = text;
              
          $http.post("/Home/UpdateNoteTest", { id: note}).then(function (responseData) {
              $http.get('/Home/getNotes').success(function (result) {
                  $scope.notes = {};
                  $scope.notes = result;
              })
               .error(function (data) {
                   console.log(data);
               });
          }) 
      }


      $scope.imagetype = function (noteId, imagetyp) {
          console.log(noteId);
          console.log(imagetyp);
          $http.post("/Home/ChangeImageType", { id: noteId, type: imagetyp }).error(function (responseData) {
              //   console.log("Error !" + responseData);
          });
          $scope.notes = {};
          $http.get('/Home/getNotes').success(function (result) {
              $scope.notes = result;
          })
     .error(function (data) {
         console.log(data);
     });
      }

      $scope.isUseris = function (user) {
          var b = getUser();
          if (user == b) return true;
          else return false;
      }

      $scope.color = function (noteId, color) {
          $http.post("/Home/ChangeColor", { id: noteId, type: color }).then(function (responseData) {
               $scope.notes = {};
              $http.get('/Home/getNotes').success(function (result) {
                  $scope.notes = result;
              })
     .error(function (data) {
         console.log(error+" "+data);
     });
          });
          $scope.notes = {};
      
      }
      $scope.save = function (noteText) {
          console.log(noteText);
      }


  }])
 
.directive('noteContent', function () {
    return {
        restrict: 'E',
        replace : true,
        link: function (scope, element, attrs) {
            element.bind('click', function () {
                console.log('clicked');
                scope.contenteditable = true;
               
             
            });
        }
    };
})
.directive('note', function ($document) {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        //Template used only for sample purpose please use templateUrl width extra file. 
        template: '<div class="note"><div class="noteBody" ng-transclude></div></div>',
        link: function (scope, element, attr) {
            var onElement = false;
            var pressElement = false;

            var elementLeft, elementTop;
       
          
   
            element.on('mouseenter', function (event) {
                onElement = true;
                element.css({
                    'z-index': 3,
                });
            });

            element.on('mouseleave', function (event) {
                onElement = false;
                element.css({
                    'z-index': 2

                });
            });

            element.on('mouseup', function (event) {
                pressElement = false;
                elementLeft = null; elementTop = null;
           

            
          

            });

            element.on('mousedown', function (event) {
                pressElement = true;
                elementLeft = event.offsetX;
                elementTop = event.offsetY - 5;
             
            });


            element.on('mousemove', function (event) {
                if (onElement && pressElement) {
                    element.css({
                        'left': event.pageX - elementLeft + "px",
                        'top': event.pageY - elementTop - 60 + "px"
                       
                    });
             
                   

                }
            }); 
        }
    };
});

