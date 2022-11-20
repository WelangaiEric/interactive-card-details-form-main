const cardNum=document.querySelector('#CardNumber');
const Errormsg=document.querySelector('.error-msg');
const subForm = document.querySelector('.form');
const confirm = document.querySelector('.confirmation');
const dateErr = document.querySelector('#expDate-mm');
const dateErr2 = document.querySelector('#expDate-yy');
const cvcErr3 = document.querySelector('.cvc');
const cardName = document.querySelector('#CardName')


const Submitbtn = document.querySelector('#submitBtn');
Submitbtn.addEventListener('click',function(e){
    e.preventDefault();
    if(isNaN(cardNum.value)||cardNum.value==''){
        Errormsg.style.display='initial' ;
        cardNum.style.borderColor='hsl(0, 100%, 66%)'
        if(cardName.value==''){
            cardName.style.borderColor='hsl(0, 100%, 66%)'

        }
        
    
        if(dateErr.value==''||dateErr2.value==''){
            document.querySelector('.cant1').style.display='initial'
            dateErr.style.borderColor='hsl(0, 100%, 66%)'
            dateErr2.style.borderColor='hsl(0, 100%, 66%)'
    
        }
        if(cvcErr3.value==''||cvcErr3.value.length>3){
            document.querySelector('.cant2').style.display='initial'
            cvcErr3.style.borderColor='hsl(0, 100%, 66%)'
            
        }
    }
    else{
        if(cardName.value !=''&& cardNum.value!=''&&dateErr.value!=''&&dateErr2.value!=''&&cvcErr3.value!=''){
            Errormsg.style.display='none' 
            subForm.style.display='none';
            confirm.style.display='flex';
        }
       
       
        
    }
  
   
    
 
   
});
document.querySelector('.exit').addEventListener('click', function(e){
  alert('YEAH,THATS JUST IT😂😂!')
});
// dom elements
cardName.addEventListener("keyup", function () {
    document.querySelector('.cardNameDisplay').textContent = cardName.value;
  });
dateErr.addEventListener("keyup", function () {
    document.querySelector('.cardMMDisplay').textContent = dateErr.value;
  });
  
  dateErr2.addEventListener("keyup", function () {
    document.querySelector('.cardYYDisplay').textContent = dateErr2.value;
  });
  cardNum.addEventListener("keyup", function () {
    document.querySelector('.cardNumDisplay').textContent = cardNum.value;
  });
  cvcErr3.addEventListener("keyup", function () {
    document.querySelector('.cvcDisplay').textContent = cvcErr3.value;
  });
 



