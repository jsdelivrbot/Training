// Event Listener

// capture the form
const form = document.getElementById('loan-form');
// invoke listeners
allEventListeners()

function allEventListeners(){
    // form.addEventListener('submit', calculateResults)
    // we got to delay just to make it today
    form.addEventListener('submit', function(event){
        // Hide Results
        document.getElementById('results').style.display = 'none';
        // Show Loader
        document.getElementById('loading').style.display = 'block';
        
        setTimeout(calculateResults, 2000);
        
        console.log("hit");
        // document.getElementById('results').style.display = 'block';
        
        event.preventDefault();
    })
}

function calculateResults(){
    // becasue its a form prevent default
    console.log("Calculating...");
    // UI Variables
    const amountElement = document.getElementById('amount');
    // console.log(amountElement);
    const interestElement = document.getElementById('interest');
    // console.log(interestElement);
    const yearsElement = document.getElementById('years');
    // console.log(yearsElement);
    //app.use(bp.urlencoded({extended:true}));
    // UI Variables Display
    const monthlyPaymentElement = document.getElementById('monthlyPayment');
    // console.log(monthlyPaymentElement);
    const totalPaymentElement = document.getElementById('totalPayment');
    // console.log(totalPaymentElement);
    const totalInterestElement = document.getElementById('totalInterest');
    // console.log(totalInterestElement);
    
    // Calculations
    const principal = parseFloat(amountElement.value);
    // console.log(principal);
    const calculatedInterest = parseFloat(interestElement.value) / 100 / 12;
    
    const calculatedPayments = parseFloat(yearsElement.value) * 12;
    
    // compute Monthly Payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthlyPay = (principal*x*calculatedInterest)/(x-1);
    
    if(isFinite(monthlyPay)){
        monthlyPaymentElement.value = monthlyPay.toFixed(2);
        totalPaymentElement.value = (monthlyPay * calculatedPayments).toFixed(2);
        totalInterestElement.value = ((monthlyPay * calculatedPayments)-principal).toFixed(2);
        // show results
        document.getElementById('results').style.display = 'block';
        // hide spinner
        document.getElementById('loading').style.display = 'none';
    }
    else {
        // console.log("Please Check Your numbers, cause it didn't work");
        showError('Please check your Numbers');
    }
    // event.preventDefault();
}

function showError(errorStr){
    // Hide Results
    document.getElementById('results').style.display = 'none';
    // Hide Loading Bar
    document.getElementById('loading').style.display = 'none';
    // Create a div
    const errorDiv = document.createElement('div');
    // Get Elements
    // html collection - getElementsByClassName
    const cardElement = document.querySelector('.card');
    // returns the Element - querySelector
    // console.log(cardElement);
    const headingElement = document.querySelector('.heading')
    
    // Add class
    errorDiv.className = 'alert alert-danger';
    
        // add a close button "x" to this alert
        const buttonElement = document.createElement('button');
        buttonElement.className = 'close'
        buttonElement.setAttribute('type', 'button');
        buttonElement.setAttribute('data-dismiss', 'alert');
        buttonElement.setAttribute('aria-label', 'close');
            // this is a span Element inside the button element per bootsrap
            const spanElement = document.createElement('span');
            spanElement.setAttribute('aria-hidden', 'true');
            spanElement.innerHTML = '&times;'
            
            buttonElement.appendChild(spanElement);
    
    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(errorStr));
    errorDiv.appendChild(buttonElement)
    
    cardElement.insertBefore(errorDiv, headingElement);
    // in window, do a set timeout
    // Clear Error after 3 seconds
    setTimeout(clearError, 30000);
}

// Clear Error

function clearError(){
    const alertDiv = document.querySelector('.alert');
    alertDiv.remove();
}
