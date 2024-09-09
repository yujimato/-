const eliminate=document.getElementsByClassName("delete")
const boxes=document.getElementsByClassName("box")
for(let i=0;i<eliminate.length;i++){
    eliminate[i].onclick=function(){
        this.closest('.box').style.display = "none";
        checkAllClear();   
    }
}

const complete=document.getElementById("complete")

function checkAllClear() {
    // HTML コレクションを配列に変換
    const boxesArray = Array.from(boxes);
    
    // 全ての要素の display プロパティが 'none' かをチェック
    const allNone = boxesArray.every(box => getComputedStyle(box).display === 'none');
    
    if (allNone) {
        complete.textContent = "完璧主義もほどほどにね！";
        complete.style.fontSize="100px"
        complete.style.position = "absolute";
        complete.style.top = "50%";
        complete.style.left = "50%";
        complete.style.transform = "translate(-50%, -50%)";
    }
}


