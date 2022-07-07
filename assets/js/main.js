


var category = new Array();

// const Servicerow = document.getElementById("service-row");
const appendContent = document.querySelector('.service-page');
const url1 = 'https://dealdrivebak.herokuapp.com/v1/api/paks';
const url2 = 'https://dealdrivebak.herokuapp.com/v1/api/cats';
let output = '';

// Get: Read The Post
// Method GET
// fetch(url2)
//     .then(res => res.json())
//     .then(data =>{
//       parseTodoItems(data)
//       addServicePage()
//     })

window.onload = init;
function init() {
    getServicesData();
}
function getServicesData() {
    var request = new XMLHttpRequest();
    request.open("GET", url2, true);
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE && request.status ===200){
            if(request.responseText){
              if(request.responseText ==null || request.responseText.trim() == " "){
                return;
              }
              var catArray = JSON.parse()
              if(catArray.length == 0){
                console.log("Error: the todo list array is empty! ");
                return
              }
              for (var i = 0; i < catArray.length; i++){
                var catItem = catArray[i]
                category.push(catItem)
              }
              console.log("category item: ");
              console.log(category);

              // console.log(request.responseText);
                // parseCatItems(request.responseText)
                // addServicePage()
            }
            else{
                console.log("Error: Data is empty");
            }
        }
    };
    request.send();
} 

    function parseCatItems(cat) {
      if(cat ==null || cat.trim() == ""){
          return;
      }
      var catArray = JSON.parse(cat)
      if(catArray.length == 0){
          console.log("Error: the todo list array is empty! ");
          return
      }
      for (var i = 0; i < catArray.length; i++){
          var catItem = catArray[i]
          category.push(catItem)
      }
      console.log("category item: ");
      console.log(category);
  }


  function addServicePage() {
    var Servicerow = document.getElementById("service-row");
    for (var i = 0; i < category.length; i++){
        var catItem = category[i]
        output+=`
            <div class="col-lg-9 pt-5">
            <div class="tab-content">
              <div class="tab-pane active show" id="mtab-1">
                <div class="row gy-4">
                  <div class="col-lg-3 d-flex align-items-center justify-content-center">
                    <h3>${catItem.categoryName}</h3>
                  </div>
                  <div class="col-lg-3 details d-flex align-items-center justify-content-center">
                    <h4><sup>$</sup><span> Mobile App</span></h4>
                  </div>
                  <div class="col-lg-3 d-flex align-items-center justify-content-center">
                    <div class="text-center">
                      <a href="#" class="service-btn">Reguest</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="mtab-2">
                <div class="row gy-4 ">
                  <div class="col-lg-3 d-flex align-items-center justify-content-center">
                    <h3>${catItem.categoryName}</h3>
                  </div>
                  
                  <div class="col-lg-3 details d-flex align-items-center justify-content-center">
                    <h4><sup>$</sup> <span> Mobile App</span></h4>
                  </div>
                  <div class="col-lg-3 d-flex align-items-center justify-content-center">
                    <div class="text-center"><a href="#" class="service-btn">Reguest</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="mtab-3">
                <div class="row gy-4">
                  <div class="col-lg-3 d-flex align-items-center justify-content-center">
                    <h3>${catItem.categoryName}</h3>
                  </div>
                  
                  <div class="col-lg-3 details d-flex align-items-center justify-content-center">
                    <h4><sup>$</sup> <span> Mobile App</span></h4>
                  </div>
                  <div class="col-lg-3 d-flex align-items-center justify-content-center">
                    <div class="text-center"><a href="#" class="service-btn">Reguest</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <ul class="nav nav-tabs flex-column">
              <li class="nav-item">
                <a class="nav-link active show" data-bs-toggle="tab" href="#mtab-1">Brand</a>
              </li>
              <li class="nav-item">
                <a id="new-bg" class="nav-link dffbg" data-bs-toggle="tab" href="#mtab-2">Logo</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#mtab-3">Letter head</a>
              </li>
            </ul>
          </div>
            `;
        Servicerow.appendChild(output)
    }
}