

var correctAns= []
$(document).ready(function(){
    let form = $("#wrapper");
    //fetching data using GET Request in JQuery
    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", function(data){
        renderData(data)
    })
    function renderData(data){
    for(let i=0; i<data.length; i++){

        correctAns.push(data[i].answer) // put all correct ans in one array
        let quesSection = $("<div>").addClass("questionSection");
        let h3 = $("<h3>").text("Q"+(i+1)+". "+data[i].question);
        quesSection.append(h3);
        for(let j=0; j<data[j].options.length;j++){
            let input = `<input type="radio" name="Q${i+1}" value="${j+1}" id="Q${(i+1)+data[i].options[j]}">
                        <label class="labels" for="Q${(i+1)+data[i].options[j]}">${data[i].options[j]}</label><br>`
            quesSection.append(input);
        }
        form.append(quesSection)        
    }

    let btn = `<button  id="btn" onClick=result()>submit</button>`;
    form.append(btn)
    $("#totalScore").text(data.length)
    
}   

})
//Event handler for Form Submit Button
function result(){  
    let totalScore = 0
    let selectedAns = $('input[type=radio]:checked')
    for(let i = 0; i< selectedAns.length; i++){
        // console.log(selectedAns[i].value) // getting value from the input radio option
        if(selectedAns[i].value == correctAns[i]){ // comparing both correct option and selected option
            totalScore +=1
        }
    }
    $('#score').text(totalScore)
  

} 