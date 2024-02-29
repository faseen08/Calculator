function btnclick(val)
{
    document.getElementById("screen").value+=val
}

function clearDisplay()
{
    document.getElementById("screen").value=""
}
function Ans()
{
    var text=document.getElementById("screen").value
    var result=eval(text) /*Here "eval" is an already defined function, which used to calculate all the operations in the text */
    document.getElementById("screen").value=result
}