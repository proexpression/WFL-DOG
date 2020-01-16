function checkAllLdaps() { 
    var inputs = document.querySelectorAll('.ldap'); 
    for (var i = 0; i < inputs.length; i++) { 
        inputs[i].checked = true; 
    } 
}
    
//create uncheckAllLdaps function 
function uncheckAllLdaps() { 
    var inputs = document.querySelectorAll('.ldap'); 
    for (var i = 0; i < inputs.length; i++) { 
        inputs[i].checked = false; 
    } 
} 

//create uncheckAllStat function 
function uncheckAllStat() { 
        var inputs = document.querySelectorAll('.status'); 
        for (var i = 0; i < inputs.length; i++) { 
            inputs[i].checked = false; 
        } 
        
    
} 

function checkAllPools() { 
    var inputs = document.querySelectorAll('.pool'); 
    for (var i = 0; i < inputs.length; i++) { 
        inputs[i].checked = true; 
    } 
}
    
//create uncheckAllLdaps function 
function uncheckAllPools() { 
    var inputs = document.querySelectorAll('.pool'); 
    for (var i = 0; i < inputs.length; i++) { 
        inputs[i].checked = false; 
    } 
} 

function myFunction() {
    var coffee = document.forms[0];
    var txt = "";
    var i;
    for (i = 0; i < coffee.length; i++) {
      if (coffee[i].checked) {
        txt = txt + coffee[i].value + " ";
      }
    }
    document.getElementById("order").value = txt;
  }

  function copyFunction() {
    /* Get the text field */
    var copyText = document.getElementById("order");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    
  }
        