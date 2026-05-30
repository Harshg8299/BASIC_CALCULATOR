
function Add()
{
    let x = Number(document.getElementById('n1').value);
    let y = Number(document.getElementById('n2').value);
    let sum = x+y;
    document.getElementById("r").innerText = "Result "+sum;
}

function Subract()
{
    let x = Number(document.getElementById('n1').value);
    let y = Number(document.getElementById('n2').value);
    let diff = x-y;
    document.getElementById("r").innerText = "Result "+diff;
    
}

function Multiply()
{
    let x = Number(document.getElementById('n1').value);
    let y = Number(document.getElementById('n2').value);
    let p = x*y;
    document.getElementById("r").innerText = "Result "+p;
    
}

function Divide()
{
    let x = Number(document.getElementById('n1').value);
    let y = Number(document.getElementById('n2').value);
    let d = x/y;
    document.getElementById("r").innerText = "Result "+d;
    
}