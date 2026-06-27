# Task-12-JavaScript-Intro-Datatypes-Operators

# Compound Interest Calculator

A simple JavaScript program that calculates **Compound Interest** using predefined values and the standard compound interest formula.

## Project Structure

```text
Compound-Interest-Calculator/
│── index.html
│── script.js
└── README.md
```

##  Formula Used

The program uses the standard Compound Interest formula:

```text
A = P(1 + r/n)^(nt)
```

Where:

- **A** = Final Amount
- **P** = Principal Amount
- **r** = Annual Interest Rate
- **n** = Number of times interest is compounded per year
- **t** = Time (in years)

### JavaScript Formula

```javascript
const amount = principal * Math.pow((1 + ((rate / 100) / n)), (n * time));
const compoundInterest = amount - principal;
```

## ▶️ How to Run

1. https://github.com/kjwashim/Task-12-JavaScript-Intro-Datatypes-Operator
2. Download or clone the repository.
3. Open the project folder.
4. Open `index.html` in any web browser.
5. Press **F12** and open the **Console** tab to view the output.

##  Output

```text
Principal Amount: ₹50000
Rate of Interest: 10%
Time: 3 years
Compound Interest after 3 years is: ₹16550.00
Total Amount: ₹66550.00


## 👨‍💻 Author

**MD Washim Akram**
