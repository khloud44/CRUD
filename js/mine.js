// function StoreProduct(){
    let NamProduct =document.getElementById("NamProduct");
    let TypeProduct =document.getElementById("TupeProduct");
    let PriceProduct =document.getElementById("PriceProduct");
    let StatProduct =document.getElementById("StatProduct");
    let BtnAdd =document.getElementById("BtnAdd");
    let Table =document.getElementById("Table");


     let i=0;   
    BtnAdd.addEventListener("click",function(){
     let Product = ` <tr>
                     <td>${i}</td>
                      <td>${NamProduct.value}</td>
                      <td>${TypeProduct.value}</td>
                      <td>${PriceProduct.value}</td>
                      <td>${StatProduct.value}</td>
                      <td><button class="btn btn-warning"><i class="fas fa-Edit"></i></button></td>
                      <td><button class="btn btn-danger"><i class="fas fa-trash-alt "></i></button></td>
                    </tr>`;
                    i++;
                     Table.innerHTML +=Product;
                   CleanValue();
    }) 
    function  CleanValue(){
      NamProduct.value="";
      TypeProduct.value="";
      PriceProduct.value="";
      StatProduct.value="";
    
  }


     
































      // var str1={};
      //  for(i=0;;i++){ 
      //   var str=[
      //     // NamProduct.value,
      //     // TupeProduct.value,
      //     // PriceProduct.value,
      //     // StatProduct.value
      //     ];
         
      
//            str1+=` <tr>
//                   <td> `+i+` </td>
//                   <td>`+ NamProduct.value+ `</td>
//                   <td> `+ TupeProduct.value +`</td>
//                   <td>`+ PriceProduct.value +`</td>
//                   <td>`+ StatProduct.value +`</td>
//                   <td><i class="fab-fa-instagram"></i></td>
//                   <td><i class="fab-fa-linkedin"></i></td>
//                   <td></td>
//                 </tr>`;

//                 str.push(str1);

                 
//       }
//       console.log(str); 
     
//      document.getElementById("TBody").innerHTML=str;

// }
