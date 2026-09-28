let Btns=document.getElementsByClassName('ViewBtnStd');
const closeBtn=document.getElementById('CloseBtnStd');
closeBtn?.addEventListener('click',() => {
    document.getElementById('PopUpOverlayStudent').style.display = 'none';
})
Array.from(Btns).forEach(Btn => {
    Btn.addEventListener('click',() => {
        document.getElementById('PopUpOverlayStudent').style.display = 'flex';
    })

})
document.addEventListener("DOMContentLoaded", () => {
    const studentRows = document.querySelectorAll(".StudentRow");
    let activeRowIndex = null;
    studentRows.forEach((row, index) => {
        row.addEventListener("click", () => {
           
            const existingTable = row.parentElement.querySelector(".TableSection");
            if (existingTable) {
                existingTable.remove();
            }

            if (activeRowIndex === index) {
                activeRowIndex = null;
            } else {
               
                const tableHTML = `
                  <div class="TableSection" id="TableSection">
            <div class="QuestionsInfo">
                <h4>
                    Solved Questions: <span>9</span>
                </h4>
                <h4>
                    Correct Answers: <span>3</span>
                </h4>
                <h4>
                    Current Rank: <span>2</span>
                </h4>
            </div>
            <div class="tableContainer">
                <div class="TableWrapper">
                    <table class="activityTable">
                        <thead>
                            <tr>
                                <th>Questions</th>
                                <th>Status</th>
                                <th>Score</th>
                                <th>Times</th>
                                <th>Answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="TableRow">
                                <td>1.wwwwww</td>
                                <td><span>Not Correct</span>

                                </td>
                                <td>0</td>
                                <td>00:02:10 </td>
                                <td>

                                    <button class="ViewBtnStd" >
                                        VIEW
                                    </button>


                                </td>

                            </tr>
                            <tr class="TableRow">
                                <td>2.wwwwww</td>
                                <td><span >Not Correct</span>

                                </td>
                                <td>0</td>
                                <td>00:02:10 </td>
                                <td>
                                    <button class="ViewBtnStd">
                                        VIEW
                                    </button>

                                </td>

                            </tr>
                            <tr class="TableRow">
                                <td>3.What is ANN</td>
                                <td><span> Correct</span>

                                </td>
                                <td>10</td>
                                <td>00:02:10 </td>
                                <td>
                                    <button class="ViewBtnStd" id="ViewBtnStd">
                                        VIEW
                                    </button>

                                </td>

                            </tr>
                            <tr class="TableRow">
                                <td>4.What is ANN</td>
                                <td><span> Correct</span>

                                </td>
                                <td>10</td>
                                <td>00:02:10 </td>
                                <td>
                                    <button class="ViewBtnStd" >
                                        VIEW
                                    </button>

                                </td>

                            </tr>
                            <tr class="TableRow">
                                <td>5.What is ANN</td>
                                <td><span> Correct</span>

                                </td>
                                <td>10</td>
                                <td>00:02:10 </td>
                                <td>
                                    <button class="ViewBtnStd">
                                        VIEW
                                    </button>

                                </td>

                            </tr>


                        </tbody>
                    </table>

                 <div class="PopupOverlay" id="PopUpOverlayStudent">
                        <div class="Popup">
                            <div class="question-box">
                                <div class="QuestionHeader">
                                    <h1>Question answer</h1>
                                    <button class="CloseBtn" id="CloseBtnStd">&times;

                                    </button>
                                </div>
                                <div class="QuestionHeaderDiv">
                                    <div class="questions">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.75331 2.35241C7.10358 1.54362 8.64793 1.11621 10.2219 1.11572C11.5314 1.11495 12.8243 1.40977 14.004 1.97819C15.1838 2.54662 16.22 3.374 17.0354 4.39865C17.8509 5.4233 18.4246 6.6188 18.7137 7.89603C19.0028 9.17325 18.9999 10.4993 18.7053 11.7752C18.4106 13.0512 17.8317 14.2442 17.0117 15.2652C16.1918 16.2863 15.152 17.1092 13.9698 17.6725C12.7876 18.2357 11.4935 18.5249 10.1839 18.5184C9.09097 18.513 8.01079 18.3018 6.99935 17.8977L2.05584 18.7209C1.60948 18.7952 1.24462 18.3675 1.38837 17.9384L2.66543 14.1268C1.98771 12.9381 1.59845 11.6036 1.53306 10.2313C1.45815 8.65907 1.81109 7.09601 2.55427 5.70856C3.29745 4.3211 4.40305 3.16121 5.75331 2.35241Z" fill="#F1F6FE" stroke="#4C6BB6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Question 1
                                    </div>
                                    <div class="Sum">
                                      
                                    <p class="score">❌ 0/10 point</p>
                                    </div>
                                </div>
                                <div class="QuestionContent">
                                    <h2>
                                    Which of the following best explains why the Earth experiences seasons?
                                    </h2>
                                    <div class="QuestionOptions">
                                        <div class="Option Correct">
                                            <span class="OptionIndicator">✔

                                            </span>
                                            The Earth’s distance from the Sun changes throughout the year.
                                        </div>
                                        <div class="Option">
                                            <span class="OptionIndicator">B</span>
                                            The tilt of the Earth's axis causes varying sunlight in different parts of the world.
                                        </div>
                                        <div class="Option Incorrect">
                                            <span class="OptionIndicator">✖</span>
                                            The Sun's energy fluctuates each season.
                                        </div>
                                        <div class="Option">
                                            <span class="OptionIndicator">D</span>
                                            The Earth rotates at different speeds during the year.
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div> 
                </div>


            </div>
        </div>
                  
                
                
                
                
                
                `;
                if(window.innerWidth < 1400){
                    row.insertAdjacentHTML("afterend", tableHTML);
                }
             

                activeRowIndex = index; 
            }
        });
    });
  
    


});


