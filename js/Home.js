class Home {
  constructor(ButtonId, containerId) {
      this.Button = document.getElementById(ButtonId);
      this.container = document.getElementById(containerId);
      this.poolClass = document.getElementById('HomeMyPoolsBigContainer'); 
      this.HomeGamesPolls = document.querySelectorAll('#HomeGamesPolls .Rows .Row'); // NodeList
      this.Rows = document.querySelectorAll('#HomeMyPoolsBigContainer .MyPools .MyPoolClass'); // NodeList

      if (this.poolClass) {
          this.poolClass.style.display = 'none'; 
      } else {
          console.error('Element with ID "HomeMyPoolsBigContainer" not found.');
      }

      if (this.Button && this.container) {
          this.Button.addEventListener('click', () => {
              this.setActive(ButtonId);
              if (ButtonId === "polls" && this.poolClass) {
                  this.poolClass.style.display='flex'
                  this.hideElements(this.HomeGamesPolls); 
                  console.log(this.Rows);
                  this.showElements(this.Rows); 
              } else if (ButtonId === "games" && this.Rows.length > 0) { 
                   this.poolClass.style.display='none'
                  this.hideElements(this.Rows); // Hide all Rows
                  this.showElements(this.HomeGamesPolls); // Show HomeGamesPolls elements
              }
          });
      } else {
          // console.error(`Element with ID "${ButtonId}" or container "${containerId}" not found.`);
      }
  }

  setActive(activeId) {
      const Buttons = document.querySelectorAll('div');
      Buttons.forEach(button => {
          if (button.id == activeId) {
              button.classList.add('active');
          } else {
              button.classList.remove('active');
          }
      });
  }

  hideElements(elements) {
      elements.forEach(element => {
          element.style.display = 'none'; // Hide each element in the NodeList
      });
  }

  showElements(elements) {
      elements.forEach(element => {
          element.style.display = 'flex'; // Show each element in the NodeList
      });
  }
}


document.addEventListener('DOMContentLoaded', () => {
    const game = new Home('games','GamesPolles');
    const poll = new Home('polls','GamesPolles');
});



function selectOptions(customSelectClass, selectBoxClass, optionsClass) {
    document
      .querySelectorAll(`.${customSelectClass}`)
      .forEach((customSelect) => {
        const selectBox = customSelect.querySelector(`.${selectBoxClass}`);
        const options = customSelect.querySelector(`.${optionsClass}`);

        selectBox.addEventListener("click", (event) => {
          event.stopPropagation();
          options.style.display =
            options.style.display === "none" ? "block" : "none";
        });

        customSelect
          .querySelectorAll(`.${optionsClass} li`)
          .forEach((option) => {
            option.addEventListener("click", () => {
              selectBox.textContent = option.textContent;
              options.style.display = "none";
            });
          });

        document.addEventListener("click", (event) => {
          if (!customSelect.contains(event.target)) {
            options.style.display = "none";
          }
        });
      });
  }

  selectOptions("custom-select", "select-box", "options");


document.getElementById('CreateRoomBox')?.addEventListener('click',() => {
  document.getElementById("PopUpOverlayRoom").style.display = "flex";
})
document.getElementById('CancelBtn')?.addEventListener('click',() => {
  document.getElementById("PopUpOverlayRoom").style.display = "none";
})


//PopUpOverlayStudent 
document.getElementById('inviteBox')?.addEventListener('click',() => {
  document.getElementById("StudentPopupOverlay").style.display = "flex";
})
document.getElementById('cancelStudentBtn')?.addEventListener('click',() => {
  document.getElementById("StudentPopupOverlay").style.display = "none";
})

// span 
ShowIcons=document.querySelectorAll('.ShowIcon span');

ShowIcons.forEach(Icon => {
  Icon.addEventListener('click',() => {
     console.log("show Icon clicked");
     console.log(Icon); 
     const DropList =document.querySelector('.DropList');
     console.log(DropList);
     if(DropList) {
      DropList.remove();
     } 
     else {
      Icon.style.position = 'relative';
      Icon.innerHTML += `
       <div class="DropList" style="z-index: 1000; background: white; border: 1px solid #ddd;">
         <ul style="list-style: none; margin: 0; padding: 0;">
           <li style="padding: 8px; cursor: pointer;">Edit</li>
           <li style="padding: 8px; cursor: pointer;">Archive</li>
           <li style="padding: 8px; cursor: pointer;">Delete</li>
         </ul>
       </div>
     `; 
     }
     
  })
})
const CreateClass=document.getElementById('CreateClass');
CreateClass.addEventListener('click',() => {
  window.location.href = "index.php?section=CreateNewClass";
})

const MyTaskPopupOverlay=document.getElementById('MyTaskPopupOverlay');

const newTaskInput = document.querySelector('.new-task-input');

// Example: Add an event listener to the button
newTaskInput.addEventListener('click', () => {
  console.log('Create New Task button clicked!');
  MyTaskPopupOverlay.style.display='flex';
});
document.getElementById('pOvncelStudentBtn')?.addEventListener('click',() => {
  MyTaskPopupOverlay.style.display='none';
})