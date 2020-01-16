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

document.getElementById("btn1").addEventListener("click", function() {
    chrome.tabs.executeScript({"code": 'document.getElementById("body-container").style.backgroundColor = "blue";'});
}, false);
        