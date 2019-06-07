let menu=document.getElementById('bar');
var i=0;
function openNav()
{
    if(i%2==0){
        menu.style.height="170px";
        
        i++;
    }else
    {
        menu.style.height="0";
        
        i++;
    }
    
}