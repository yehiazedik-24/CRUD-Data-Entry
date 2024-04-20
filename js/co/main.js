var productName = document.getElementById ('ProductName');
var productPrice = document.getElementById ('ProductPrice');
var productCatgagory = document.getElementById ('ProductCatgagory');
var tabelBody = document.getElementById ('tblc');
var productList=[]



/* CHeak if ther are data into local storage */
if (localStorage.getItem('productList') !==null) {
   /*get the data and store it in array */
   productList = JSON.parse(localStorage.getItem('productList'))
   displayproduct()
} else {
   productList = [];
}

function saveproduct(){
   // Save Product Info Into Object 
 var productInfo = {
    product : productName.value,
    price : Number(productPrice.value),
    catgagory : productCatgagory.value
 };
//  store the product into array list
 productList.push(productInfo);
 /*save the array list into local storage*/
    localStorage.setItem('productList', JSON.stringify(productList));
    
    displayproduct()
}



function displayproduct(list = productList){
   var htmlContainer = ``;
   var counter = 0;

   for (const [index, item] of productList.entries()) {
      htmlContainer += `<tr>
      <th scope="row">${index + 1}</th>
      <td>${item.product}</td>
      <td>${item.price}</td>
      <td>${item.catgagory}</td>
      <td><button class="btn btn-danger" onclick="deleteproduct(${counter})">Delete</button></td>
      <td><button class="btn btn-warning">Edit</button></td>
    </tr>`;
    counter++;
   }
   tabelBody.innerHTML = htmlContainer;
   var btndel = document.getElementById('deletAll');
   if (productList.length > 0) {
      btndel.innerHTML =`<button onclick="deletAll()" class="btn btn-danger" >Delete All</button>`
  }else {
      btndel.innerHTML ="";
  }
}

displayproduct()

function deleteproduct(index){
   // delete the product from array list
   
productList.splice(index, 1);
//save the array after delete
localStorage.setItem('productList',JSON.stringify(productList)); 
//Display the product
displayproduct();
}

function productSearch(searchKey) {
   var searchResult = [] ;
   for (const item of productList) {
      if (item.product.includes(searchKey)) {
         searchResult.push(item);
      }
   }
   displayproduct(searchResult);
}
 // clear all data
 function deletAll(){
   localStorage.clear();
   productList.splice(0);
   displayproduct();
}






// function productSearch(searchKey) {
//    var searchResult = [] ;
//    for (const item of productList) {
//       if (item.product.includes(searchKey)) {
//          searchResult.push(item);
//       }
//    }
//    displayproduct(searchResult)
// }
// function productSearch(searchkey){
//   for( const item of productList){
//    if(item.name.includes(searchkey)){
//       console.log(item);
//    }
// }
// }















// function displayproduct(){
//    // for(var index=0; index<productList.length; index++) {
//    //    console.log(productList[index]);
//    var htmlContainer = ``;
//    for (const item of productList) {
//       var htmlContainer += `<tr>
//       <th scope="row">1</th>
//       <td>0</td>
//       <td>${item.name}</td>
//       <td>${item.price}</td>
//       <td>${item.catgagory}</td>
//       <td><button class="btn btn-danger">Delete</button></td>
//       <td><button class="btn btn-warning">Edit</button></td>
//     </tr>`;
//    }


//    }