// Navigation System
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.nav-btn.active').classList.remove('active');
        btn.classList.add('active');
        document.querySelector('.tool.active').classList.remove('active');
        document.getElementById(btn.dataset.tool).classList.add('active');
    });
});

// Basic Calculator Logic
let currentValue = '0';
const display = document.querySelector('.display');

document.querySelectorAll('.calculator button').forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.textContent;
        
        if (value === '=') {
            try {
                currentValue = eval(currentValue.replace('×', '*').replace('÷', '/')).toString();
            } catch {
                currentValue = 'Error';
            }
        } else {
            currentValue = currentValue === '0' ? value : currentValue + value;
        }
        
        display.textContent = currentValue;
    });
});

// Length Converter
function convertLength() {
    const conversions = {
        'meter-feet': val => val * 3.28084,
        'feet-meter': val => val / 3.28084,
        'meter-inch': val => val * 39.3701,
        'inch-meter': val => val / 39.3701,
        'feet-inch': val => val * 12,
        'inch-feet': val => val / 12
    };

    const value = parseFloat(document.getElementById('length-value').value);
    const from = document.getElementById('length-from').value;
    const to = document.getElementById('length-to').value;
    const result = conversions[`${from}-${to}`](value);
    
    document.getElementById('length-result').textContent = 
        `${value} ${from} = ${result.toFixed(2)} ${to}`;
}

// GST Calculator
function calculateGST() {
    const amount = parseFloat(document.getElementById('gst-amount').value);
    const rate = parseFloat(document.getElementById('gst-rate').value);
    const gst = (amount * rate) / 100;
    
    document.getElementById('gst-result').innerHTML = `
        GST Amount: ₹${gst.toFixed(2)}<br>
        Total: ₹${(amount + gst).toFixed(2)}
    `;
}

// Add more converter/calculator functions