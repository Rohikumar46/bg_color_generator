
function getRandomColor(){
    const letter='0123456789ABCDEF';
    let color='#';
    for(let i =0;i<6;i++)
    {
        color+=letter[Math.floor(Math.random()*16)];
    }
    return color;
}

function changeBackgroundColor()
{
    const newColor=getRandomColor();
    document.body.style.backgroundColor=newColor;
    document.getElementById("newColor").innerText = `Current color: ${newColor}`;
}