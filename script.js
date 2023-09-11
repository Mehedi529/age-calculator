document.addEventListener("DOMContentLoaded" , function(){

  const usernameInput = document.getElementById("username");
  const dobInput = document.getElementById("dob");
  const uName = document.querySelector(".u-name");
  const ageYear = document.querySelector(".age-year");
  const ageMonth = document.querySelector(".age-month");
  const ageDay = document.querySelector(".age-day");
  const errorText = document.querySelector(".error-text");

  const calculateButton = document.querySelector(".btn-primary");
  calculateButton.addEventListener("click" , function(event){
    event.preventDefault();

    const name = usernameInput.ariaValueMax;
    const dob = new Date(dobInput.value);

    const today = new Date();
    if(dob>today){
      errorText.textContent = "Invalid date. Please enter a valid date of birth"
      uName.textContent = "";
      ageYear.textContent = "";
      ageMonth.textContent = "";
      ageDay.textContent = "";
    }
    else{
      const ageInMilliseconds = today - dob;
      const ageInYears = Math.floor(ageInMilliseconds / 31536000000);
      const ageInMonths = Math.floor((ageInMilliseconds % 31536000000) / 2628000000);
      const ageInDays = Math.floor((ageInMilliseconds % 2628000000) / 86400000);   

      errorText.textContent = "";

      uName.textContent = name;
      ageYear.textContent = `${ageInYears} Years` ;
      ageMonth.textContent = `${ageInMonths} Months` ;
      ageDay.textContent = `${ageInDays} Days` ;
  
    }

  });

});