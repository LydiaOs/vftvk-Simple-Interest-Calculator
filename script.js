function compute()
{
    var principal = document.getElementById("principal").value;
    if (!principal || principal < 1)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = parseFloat(principal) * parseFloat(years) * parseFloat(rate) / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var outtext = "If you deposit <span class='number'>" + principal + "</span>,</br>";
    outtext += "at an interest rate of <span class='number'>" + rate + "</span>%.</br>";
    outtext += "You will receive and amount of <span class='number'>" + interest + "</span>,</br>"
    outtext += "in the year <span class='number'>" + year + "</span>";
    document.getElementById("result").innerHTML = outtext;
}
      
function updateRate()
{
    if (document.getElementById("rate")) {
        var reateval = document.getElementById("rate").value;
       document.getElementById("rate_val").innerText = reateval;
}

}

window.onload = function ()
{
  //  document.getElementById("rate").onchange = updateRate();
}       
