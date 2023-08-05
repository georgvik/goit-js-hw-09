import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector("button[data-start]");
const timerPicker = document.querySelector('#datetime-picker');
// const boxTimer = document.querySelector('.timer');
const timerValue = {
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]")
}

let timerId = null;
startBtn.disabled = true;



const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] < new Date()) {
        startBtn.disabled = true;
        window.alert("Please choose a date in the future")
      } else {
        startBtn.disabled = false
        startBtn.addEventListener("click", () => { changeTimerValue(selectedDates[0]) })
      }
    },
  };
  

  flatpickr(timerPicker, options);

  function changeTimerValue() {
    let timer = setInterval(() => {
      let countdown = new Date(timerPicker.value) - new Date();
      startBtn.disabled = true;
      timerPicker.disabled = true;
      console.log(countdown)
      if (countdown >= 0) {
        let timerData = convertMs(countdown);
          timerValue.days.textContent = timerData.days;
          timerValue.hours.textContent = timerData.hours;
          timerValue.minutes.textContent = timerData.minutes;
          timerValue.seconds.textContent = timerData.seconds;
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  function addLeadingZero(value) {
    return String(value).padStart(2, "0");
  };

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  