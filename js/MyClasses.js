function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    document.querySelectorAll('.DropdownContent').forEach((el) => {
        if (el.id !== dropdownId) {
            el.style.display = 'none';
        }
    });
   
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

window.onclick = function(event) {
    if (!event.target.matches('button')) {
        document.querySelectorAll('.DropdownContent').forEach((el) => {
            el.style.display = 'none';
        });
    }
}

// document.getElementById('customOption').addEventListener('change', function() {
   
//     if (this.checked) {
//       document.getElementById('datePickerPopup').style.display = 'block';
//       console.log("data picker")
//     }
//   });
  
//   document.querySelectorAll('input[name="statusOption"]').forEach(option => {
//     option.addEventListener('change', function() {
//       if (this.value !== 'custom') {
//         document.getElementById('datePickerPopup').style.display = 'none';
//       }
//     });
//   });

function navigateToSingleClass(e,FileName){
    e.preventDefault();
    let currentUrl=window.location.href;
    let newUrl=FileName;
    let updatedUrl = currentUrl.replace(/(section=[^/]+)\/([^?]+)\.php/, '$1/$2');
    let appendUrl=updatedUrl.endsWith('/')? updatedUrl + newUrl:updatedUrl + newUrl;
    window.location.href=appendUrl;
   }
//My Classes

let classes = ['.anchor', '.manage', '.viewall'];
let pages = ['/SingleClass.php', '/ManageStudent.php', '/ViewAll.php'];

classes.forEach((cls, index) => {
  document.querySelectorAll(cls).forEach(link => {
    link.addEventListener('click', (e) => {
      navigateToSingleClass(e, pages[index]);
    });
  });
});

  // My Games 
  let gamesClasses = ['.Game','.LeaderBoard'];
  let GamesPages = ['/SingleGame.php','/LeaderBoard.php'];
  gamesClasses.forEach((cls, index) => {
    document.querySelectorAll(cls).forEach(link => {
      link.addEventListener('click', (e) => {
        navigateToSingleClass(e, GamesPages[index]);
      });
    });
  });
  
 // My Rooms 
 let RoomsClasses = ['.Room'];
 let RoomsPages = ['/SingleRoom.php'];

 RoomsClasses.forEach((cls, index) => {
  document.querySelectorAll(cls).forEach(link => {
    link.addEventListener('click', (e) => {
      navigateToSingleClass(e, RoomsPages[index]);
    });
  });
});
// Data picker 
const DatePickers = document.querySelectorAll('.DatePicker');

DatePickers.forEach((picker) => {
    const dateInput = picker.querySelector('.DateInput');
    const Calendar = picker.querySelector('.Calendar');
    const monthYear = Calendar.querySelector('.MonthYear');
    const daysContainer = Calendar.querySelector('.DaysCont');
    const CalendarprevMonthBtn = Calendar.querySelector('.CalendarPrevMonth');
    const CalendarnextMonthBtn = Calendar.querySelector('.CalendarNextMonth');
    const yearSelector = Calendar.querySelector('.YearSelector');
    const yearList = yearSelector.querySelector('.YearList');
    const DaysOfWeek = Calendar.querySelector('.DaysOfWeek');

    let currentDate = new Date();

    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        monthYear.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;
        daysContainer.innerHTML = '';

        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);
        const dayCount = lastDayOfMonth.getDate();
        const startDay = firstDayOfMonth.getDay();

        // Create empty cells for the first week
        for (let i = 0; i < startDay; i++) {
            const emptyCell = document.createElement('div');
            daysContainer.appendChild(emptyCell);
        }

        // Create day cells
        for (let day = 1; day <= dayCount; day++) {
            const dayCell = document.createElement('div');
            dayCell.textContent = day;
            dayCell.classList.add('CalendarDay');

            const dateToCheck = new Date(year, month, day);
            if (dateToCheck > new Date()) {
                dayCell.classList.add('Disabled');
            } else {
                dayCell.addEventListener('click', () => selectDate(day));
            }

            daysContainer.appendChild(dayCell);
        }
    }

    function selectDate(day) {
        currentDate.setDate(day);
        dateInput.value = currentDate.toISOString().split('T')[0];
        closeCalendar();
    }

    function closeCalendar() {
        Calendar.classList.add('hidden');
    }

    function openCalendar() {
        Calendar.classList.remove('hidden');
        renderCalendar();
    }

    // dateInput.addEventListener('click', () => {
    //     currentDate = new Date();
    //     openCalendar();
    // });

    CalendarprevMonthBtn.addEventListener('click', (e) => {
        e.preventDefault();
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    CalendarnextMonthBtn.addEventListener('click', (e) => {
        e.preventDefault();
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    function populateYearSelector() {
        const currentYear = new Date().getFullYear();
        yearList.innerHTML = '';
        for (let year = currentYear; year >= 1920; year--) {
            const yearItem = document.createElement('div');
            yearItem.classList.add('YearItem');
            yearItem.textContent = year;
            yearItem.dataset.year = year;
            yearList.appendChild(yearItem);
        }
    }

    populateYearSelector();

    yearList.addEventListener('click', (e) => {
        const selectedYear = e.target.dataset.year;
        if (selectedYear) {
            currentDate.setFullYear(parseInt(selectedYear));
            renderCalendar();
            yearSelector.classList.add('hidden');
        }
    });

    monthYear.addEventListener('click', () => {
        yearSelector.classList.remove('hidden');
    });

    const customOption = document.getElementById("customOption");
    const datePicker = document.querySelector(".DatePicker");

    // Show date picker on hover
    customOption.addEventListener("mouseover", () => {
        datePicker.classList.remove("hidden");
    });

    // Hide date picker when mouse leaves the button or picker
    customOption.addEventListener("mouseout", (event) => {
        if (!datePicker.contains(event.relatedTarget)) {
            datePicker.classList.add("hidden");
        }
    });

    datePicker.addEventListener("mouseover", () => {
        datePicker.classList.remove("hidden");
    });

    datePicker.addEventListener("mouseout", () => {
        datePicker.classList.add("hidden");
    });

    // Close the Calendar when clicking outside of it
    window.addEventListener('click', (event) => {
        if (!picker.contains(event.target) && event.target !== customRadio) {
            closeCalendar();
        }
    });
});
