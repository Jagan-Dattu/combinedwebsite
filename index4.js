function enter(){
    let s=document.getElementById('input');
    let d=s.value;
    let r=parseFloat(d);
    let q=Math.floor(Math.random() * 3 )+1;
    let w=document.getElementById('input2');
    w.value=q;
    if(r==1 && q==2)
    {
        document.getElementById('answer').innerText=`computer won`;
    }
    if(r==1 && q==1)
    {
        document.getElementById('answer').innerText=`draw`;
    }
    if(r==1 && q==3)
    {
        document.getElementById('answer').innerText=`player 1 won`;
    }
    if(r==2 && q==1)
    {
        document.getElementById('answer').innerText=`player 1won`;
    }
    if(r==2 && q==2)
    {
        document.getElementById('answer').innerText=`draw`;
    }
    if(r==2 && q==3)
    {
        document.getElementById('answer').innerText=`computer won`;
    }
    if(r==3 && q==1)
    {
        document.getElementById('answer').innerText=`player 1 won`;
    }
    if(r==3 && q==2)
    {
        document.getElementById('answer').innerText=`computer won`;
    }
    if(r==3 && q==3)
    {
        document.getElementById('answer').innerText=`draw`;
    }
}
