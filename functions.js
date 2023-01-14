$(function(){
    
    var input = $('input[type=text]')
    var nameInput = $('input[name=name]');
    var emailInput = $('input[name=email]');
    var passwordInput = $('input[name=password]');
    
    function showRegister(){
       $('.right-register button').click(function(e){
        e.stopPropagation()
        $('section.register').fadeIn();
        })
    }showRegister();

    function closeRegister(){
        
        $('.close-input span').click(function(e){
            e.stopPropagation()
            $('section.register').fadeOut();
        })
    }closeRegister()
    
    function registerSite(){
        function clickInput() { 
            input.click(function(e){
                e.stopPropagation();
                input.css('background-color','rgb(150, 150, 150)')
                $(this).css('background-color','#ccc')
            })
            $('body').click(function(){
                input.css('background-color','rgb(150, 150, 150)')
            })
    
         }clickInput()
         function validateInputsToRegister() { 
       
            function invalidInput(el){
                el.css('border','2px solid red');
                el.css('color','red');
                el.focus(function(){
                    el.css('border','2px solid black');
                    el.css('color','black');
                    el.val("");
                })
            }
            function validateName(name){
                    var amount = name.val().split(' ').length;
                    var str = name.val().split(' ');
                    if(name.val() == "")return false
                    else if(amount >= 2){
                        for(var i = 0;i<amount;i++){
                            if(str[i].match(/^[A-Z]{1}[a-z]{1,}$/) == null)return false
                            else{
                                x = name.val();
                            }
                       }
                    }
                    else return false
             
                
                
            }
        
            function validateEmail(email){
                    if(email.val() == "") return false
                    else if(email.val().match(/^([a-z0-9-_]{1,})+@+([a-z0-9.-_]{1,})$/) == null)return false
                    else return true
            }
                
            function validatePassword(password){
                    if(password.val() == "")return false
                    else if(password.val().match(/^[A-Za-z0-9.-@#]{4,}$/) == null)return false 
                    else return true
            }   
        
            function sucessRegister(){
                nameInput.val("")
                emailInput.val("")
                passwordInput.val("")
                function closeRegisterAfterRegistration(){
                    $('section.register').fadeOut();
                    $('input[type=text],input[type=submit],input[type=password]').css('display','none');
                    $('input[type=email]').css('display','block');
                    $('.right-register button').css('display','none');
                    $('.beforeRegister').css('display','none');
                    $('.afterRegister').fadeIn()
                }closeRegisterAfterRegistration();
      
             
                
            }

            function afterRegistrtion(){
                function changeColorHeader(){
                   $('input[name=colorHeader]').click(function(){
                        $('header').css('background-color',$(this).val())
                   })
                }changeColorHeader()

                function changeColorPage(){
                   $('input[name=colorPage]').click(function(){
                        $('.mainPage1').css('background-color',$(this).val())
                   })
                }changeColorPage()

                function changeColorText(){
                   $('input[name=colorText]').click(function(){
                        $('.logged').css('color',$(this).val())
                   })

                   function showPageOne(){
                        $('.mainPage1').fadeIn();
                   } showPageOne();
                   
                }changeColorText()
                var x = nameInput.val();
            
                
            }
        
            function submitAll(){
                    $('input[name=submit]').click(function(e){
                        e.preventDefault();
                        if(validateName(nameInput) == false)invalidInput(nameInput)
                        else if(validateEmail(emailInput) == false)invalidInput(emailInput)
                        else if(validatePassword(passwordInput) == false)invalidInput(passwordInput)
                        else{
                            sucessRegister();
                            afterRegistrtion();
                            $('.logged').css('display','inline-block').html("logged"+" "+x);
                            $('.button1').fadeIn();

                            
                        }
                    })
                    
            }submitAll()
        
            }validateInputsToRegister();
    }registerSite();
    
    function changePage(){
        function usingButton(){
            var indexAtual = 0;
            
            $('.button1').click(function(){
               
                $('.main-pageSize').eq(indexAtual).fadeOut();
                indexAtual = $(this).index();
                indexAtual = indexAtual - 5;
                $('.main-pageSize').eq(indexAtual).fadeIn();
         

              
            })
        }usingButton()
    }changePage();
    
    
    

   function sliderImage(){
    
        $('.change-slide span').click(function(){
            var indexAtual = 0;
	        
            $('.change-slide span').css('background-color','blue');
            $(this).css('background-color','red');
            $('.s').eq(indexAtual).stop().fadeOut();
            var x = $(this).index()
            if(x == 0)indexAtual = 1
            else if(x == 1)indexAtual = 0
            else if(x==2)indexAtual=2
            $('img').eq(indexAtual).stop().fadeIn();
            console.log(indexAtual)
           
        })
   }sliderImage()



    


  

 
})