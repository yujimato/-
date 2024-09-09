const answer=document.getElementsByClassName("answer")
const quiz=document.getElementsByClassName("quiz")
const text=document.getElementById("text")

for(let i=0;i<quiz.length;i++){
    quiz[i].onclick=function(){
        if(answer[i].style.display==="none"|| answer[i].style.display === ""){
            answer[i].style.display="block"
            answer[i].style.display="inline"
            quiz[i].value="隠す"
        } else{
            answer[i].style.display="none"    
            quiz[i].value="答え"
        }
    };
}


const data=[
    ["車の種類","乗車定員","積載物の重量","積載物の大きさと積載の方法"],
    ["普通以上と大型特殊","ミニカーは1人・その他は定員表記","表記","長さ・幅1.2倍以下・地上から3.8m以下"],
    ["大型・普通二輪","1人(2人乗りとかもある)","60kg",""],
    ["原付","1人","30kg",""],
    ["小型特殊","1人","700kg","長さ・幅1.2倍以下・地上から2.0m以下"]
]



const table=document.createElement("table")
function createTable(data){
    for(i=0;i<data.length;i++){
        const row=document.createElement("tr")
    
    for(j=0;j<data[i].length;j++){
        const cell=document.createElement(i===0? "th":"td")
        const cellText =document.createElement("span")
        cellText.textContent = data[i][j]
        if (j === 2 && i !== 0) {
            const button = document.createElement("button");
            button.textContent = "答え";
            cellText.style.display="none"
            cellText.style.color="red"

            button.onclick = function(){
                
                if(cellText.style.display==="none"|| cellText.style.display === ""){
                    cellText.style.display="block"
                    cellText.style.display="inline"
                    button.textContent="隠す"
                } else{
                    cellText.style.display="none"    
                    button.textContent="答え"
                }
            }
            cell.appendChild(button)
            
        }
        cell.appendChild(cellText)
        row.appendChild(cell)
        cell.style.border = "1px solid black";
        cell.style.padding = "8px";
        cell.style.textAlign = "left";
        
    }
    table.appendChild(row)
    }
    return table;
}
const tableCar=createTable(data)
document.getElementById("table").appendChild(tableCar)


