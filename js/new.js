let NamProduct=document.getElementById("NamProduct");
let TypeProduct=document.getElementById("TupeProduct");
let PriceProduct=document.getElementById("PriceProduct");
let StatProduct=document.getElementById("StatProduct");
let BtnAdd=document.getElementById("BtnAdd");
let Table=document.getElementById("Table");
let Search=document.getElementById("Search");
let UpdateBtn=document.querySelector(".bg-success");
let AlertBtn=document.querySelector(".AlertBtn");
let AlertName=document.querySelector(".AlertName");
let AlertType=document.querySelector(".AlertType");

let ProductArray=[]; 
if(localStorage.getItem("products")==null){                          //to save the products had entered
     ProductArray=[];                                            //array for All products  
    console.log('Empty');
}else{
    ProductArray=JSON.parse(localStorage.getItem("products"));   
    OutTr();
    console.log('Full');
}

function AddProduct(){
    let Product={                                                   //for one product
        PName:NamProduct.value, 
        PType:TypeProduct.value,
        PPrice:PriceProduct.value,
        PState:StatProduct.value
    };
    ProductArray.push(Product);
    console.log(ProductArray);
    localStorage.setItem("products",JSON.stringify(ProductArray));     //to store at local storage
    OutTr();
    cleanInput();                                                           //to fill the table by products

}
 
function cleanInput(){
    NamProduct.value='';
    TypeProduct.value='';
    PriceProduct.value='';
    StatProduct.value='';
}


BtnAdd.addEventListener("click",function(){ 

    if(NamProduct.value!='' && TypeProduct.value!='' && PriceProduct.value!='' && StatProduct.value!=''){
       AddProduct();
       AlertBtn.classList.add('d-none');
    }else{
        AlertBtn.classList.remove('d-none');
        
    }
    TypeProduct.classList.remove('is-valid');
    NamProduct.classList.remove('is-valid');
});




function OutTr(){                                                     //to retrive the data on table
    let Trs="";
    for(var i=0;i<ProductArray.length;i++){
            Trs +=` <tr>
                        <td>${i}</td>
                        <td>${ProductArray[i].PName}</td>
                        <td>${ProductArray[i].PType}</td>
                        <td>${ProductArray[i].PPrice}</td>
                        <td>${ProductArray[i].PState}</td>
                        <td><button class="btn btn-warning" onclick="Edite(${i})"><i class="fas fa-Edit"></i></button></td>
                        <td><button class="btn btn-danger"  onclick="Delete(${i})"><i class="fas fa-trash-alt "></i></button></td>
                    
                    </tr>`
    }
    Table.innerHTML=Trs;     
}



Search.addEventListener("keyup",function(){                                   //search
    console.log(this.value);
    let Trs='';
    for(let i=0;i<ProductArray.length;i++){
        if(ProductArray[i].PName.toLowerCase().includes(this.value.toLowerCase()) 
        ||ProductArray[i].PType.toLowerCase().includes(this.value.toLowerCase()) 
        ||ProductArray[i].PPrice.toLowerCase().includes(this.value.toLowerCase()) 
        ||ProductArray[i].PState.toLowerCase().includes(this.value.toLowerCase())){           //toBackgroundColor
          if(this.value==this.value.toLowerCase() || this.value==this.value.toUpperCase()){   //مش عرفه اعملهم مع بعض 
                        Trs +=` <tr>  
                                <td>${i}</td>                                                 
                                <td>${ProductArray[i].PName.replace(this.value,`<span style="background-color:yellow">${this.value}</span>`)}</td>
                                <td>${ProductArray[i].PType.replace(this.value,`<span style="background-color:yellow">${this.value}</span>`)}</td>
                                <td>${ProductArray[i].PPrice.replace(this.value,`<span style="background-color:yellow">${this.value}</span>`)}</td>
                                <td>${ProductArray[i].PState.replace(this.value,`<span style="background-color:yellow">${this.value}</span>`)}</td>
                                <td><button class="btn btn-warning" onclick="Edite(${i})"><i class="fas fa-Edit"></i></button></td>
                                <td><button class="btn btn-danger"  onclick="Delete(${i})"><i class="fas fa-trash-alt "></i></button></td>
                            
                            </tr>` 
          } 
         
        }else{
            Table.innerHTML=''; 
            }
            Table.innerHTML=Trs;     
        }
         
        }
        



        
    

)



function Delete(ind){                                                        //Delete  
    ProductArray.splice(ind,1);
    console.log(ProductArray);
    localStorage.setItem("products",JSON.stringify(ProductArray)); 
   OutTr();
}


// let index=
// function Edite(ind){                                                        //Edite
//     console.log(ind);
//     NamProduct.value=ProductArray[ind].PName;
//     TypeProduct.value=ProductArray[ind].PType;
//     PriceProduct.value=ProductArray[ind].PPrice;
//     StatProduct.value=ProductArray[ind].PState;
//     BtnAdd.innerHTML="Update Product";
    
//     BtnAdd.onclick = function(){
//         ProductArray[ind].PName = NamProduct.value; 
//         ProductArray[ind].PType = TypeProduct.value;
//         ProductArray[ind].PPrice = PriceProduct.value;
//         ProductArray[ind].PState = StatProduct.value;
//         OutTr();
//         localStorage.setItem("products",JSON.stringify(ProductArray)); 
//         BtnAdd.innerHTML="Add Product";
//         BtnAdd.onclick=AddProduct();
//     }
// }

/*----------------------------------------Edite-----------------------------------------*/ 
let index;
function Edite(ind){                                                        
    index =ind;
    BtnAdd.classList.add("d-none")
    UpdateBtn.classList.remove("d-none")
    NamProduct.value=ProductArray[ind].PName;
    TypeProduct.value=ProductArray[ind].PType;
    PriceProduct.value=ProductArray[ind].PPrice;
    StatProduct.value=ProductArray[ind].PState;
    BtnAdd.innerHTML="Update Product";
}


UpdateBtn.addEventListener("click",function(){
    BtnAdd.classList.remove("d-none")
    UpdateBtn.classList.add("d-none")
    ProductArray[index].PName = NamProduct.value; 
    ProductArray[index].PType = TypeProduct.value;
    ProductArray[index].PPrice = PriceProduct.value;
    ProductArray[index].PState = StatProduct.value;
    OutTr();
    localStorage.setItem("products",JSON.stringify(ProductArray)); 
    BtnAdd.innerHTML="Add Product";
    cleanInput()
})

/*--------------------------------------validation---------------------------------------*/
let RegexValue;                                                      
function Validation(TestStr){
    
     RegexValue =/^[A-Z][a-z ]{2,15}$/;
    if(!RegexValue.test(TestStr)){
        return false;
        // AlertInput.classList.remove('d-none');
        // NamProduct.classList.add('is-invalid');
}
else{
    return true;
    // AlertInput.classList.add('d-none');
    // NamProduct.classList.remove('is-invalid');
}
}


NamProduct.addEventListener('blur',function(e){

    if(Validation(e.target.value)==false){
        AlertName.classList.remove('d-none');
        NamProduct.classList.add('is-invalid');
    }else{
        AlertName.classList.add('d-none');
        NamProduct.classList.remove('is-invalid');
        NamProduct.classList.add('is-valid');
    }
   
})
TypeProduct.addEventListener('blur',function(e){
    if(Validation(e.target.value)==false){
        AlertType.classList.remove('d-none');
        TypeProduct.classList.add('is-invalid');
    }else{
        AlertType.classList.add('d-none');
        TypeProduct.classList.remove('is-invalid');
        TypeProduct.classList.add('is-valid');
        
    }
})

 
