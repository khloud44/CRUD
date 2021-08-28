let NamProduct =document.getElementById("NamProduct");
let TypeProduct =document.getElementById("TupeProduct");
let PriceProduct =document.getElementById("PriceProduct");
let StatProduct =document.getElementById("StatProduct");
let BtnAdd =document.getElementById("BtnAdd");
let Table =document.getElementById("Table");
let Search =document.getElementById("Search");


// if(localStorage.getItem("myData")==null){    //علشان لو دخل من موقع تاني ميظهرش error
 var ProdArray=[]; 
// }else{
//     var ProdArray=JSON.parse(localStorage.getItem("myData"));
// }               
// // let ProdArray=[];               //array of objects
// OutTrs();



BtnAdd.addEventListener("click",function(){

//   if(RegexTestint()==true && NamProduct.value !=="" && TypeProduct.value !=="" 
//     && PriceProduct.value !=="" && StatProduct.value !==""){

    let Product={                                  //object for one product
        PNAme :NamProduct.value,
        PType :TypeProduct.value,
        PPrice :PriceProduct.value,
        PState :StatProduct.value
    };
    ProdArray.push(Product);
    
    // RegexTestint();
    localStorage.setItem("myData",JSON.stringify(ProdArray));
    OutTrs();
    // BtnAdd.setAttribute("disabled",false);
    CleanValue(); 
//  }
//  else if(RegexTestint()==false){
//     BtnAdd.setAttribute("disabled",true);


// }
// ButttonDiplay();
});
// function ButttonDiplay(){
//     BtnAdd.setAttribute("disabled",false);

// }




function  CleanValue(){
    NamProduct.value="";
    TypeProduct.value="";
    PriceProduct.value="";
    StatProduct.value="";
}

function OutTrs(){                                 //Function For Put in table
    let Trs="";
  for(let i=0;i<ProdArray.length;i++){  
          Trs+=` <tr>
                    <td>${i}</td>
                    <td>${ProdArray[i].PNAme}</td>
                    <td>${ProdArray[i].PType}</td>
                    <td>${ProdArray[i].PPrice}</td>
                    <td>${ProdArray[i].PState}</td>
                    <td><button onclick="EditValue(${i})" class="btn btn-warning"><i class="fas fa-Edit"></i></button></td>
                    <td><button onclick="deleteProduct(${i})" class="btn btn-danger"><i class="fas fa-trash-alt "></i></button></td>
                </tr>`;
                 }
                 Table.innerHTML=Trs;
                
}
Search.addEventListener("keyup",function(){              //for Search

    let Trs="";
    for(let i=0;i<ProdArray.length;i++){ 
    if(     ProdArray[i].PNAme.toLowerCase().includes(Search.value.toLowerCase()) 
        ||  ProdArray[i].PType.toLowerCase().includes(Search.value.toLowerCase()) 
        ||  ProdArray[i].PPrice.toLowerCase().includes(Search.value.toLowerCase()) 
        ||  ProdArray[i].PState.toLowerCase().includes(Search.value.toLowerCase())){
     
            Trs+=` <tr>
                      <td>${i}</td>
                      <td>${ProdArray[i].PNAme}</td>
                      <td>${ProdArray[i].PType}</td>
                      <td>${ProdArray[i].PPrice}</td>
                      <td>${ProdArray[i].PState}</td>
                      <td><button class="btn btn-warning"><i class="fas fa-Edit"></i></button></td>
                      <td><button class="btn btn-danger"><i class="fas fa-trash-alt "></i></button></td>
                  </tr>`;
                   }
                   
            Table.innerHTML=Trs;
                }
})


function deleteProduct(index){                           //For Delete
    ProdArray.splice(index,1);
    localStorage.setItem("myData",JSON.stringify(ProdArray));
    OutTrs();


}




// function RegexTestint(){
// let str =NamProduct.value;
// // console.log(NamProduct.value)
//     let RegexValue =/^[A-Z][a-z ]{3,15}$/;
//     // console.log(RegexValue.test(str));
//     if(RegexValue.test(str)){
//         return  true;
//         // console.log("true");
//     }else{
//         return false;
//     }
// }



function EditValue(ind){
    console.log(ind);
    
    ProdArray[ind]=JSON.parse(localStorage.getItem("myData"))[ind];
    
    NamProduct.value=ProdArray[ind].PNAme;
    TypeProduct.value=ProdArray[ind].PType;
    PriceProduct.value=ProdArray[ind].PPrice;
    StatProduct.value=ProdArray[ind].PState;
    ProdArray.splice(ind,1);
    OutTrs();


    
    // ProdArray[ind].PNAme=NamProduct.value;
    
     

    // console.log(ProdArray[ind])
}

