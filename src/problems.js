export const problems = [

  {
    id: 1,
    title: "Navigation Bar Structure",

    html_question: `Create a navigation bar.

Requirements:

1. Use a <nav> element.
2. Inside it create a div with the text:
   Debug Relay Race
3. Create an unordered list containing three items:
   Home
   Challenges
   Leaderboard

Example item format:

<li>Home</li>

Write the full HTML structure.`,

    html_solution: `<nav><div>Debug Relay Race</div><ul><li>Home</li><li>Challenges</li><li>Leaderboard</li></ul></nav>`,

    python_question: `Call a function named is_prime to check whether the number 7 is prime.

Example format:
function_name(number)

Write the correct Python function call.`,

    python_solution: `is_prime(7)`,

    sql_question: `Table: employees

id | name | salary

Example data:
1 | Alice | 50000
2 | Bob | 45000
3 | Charlie | 70000

Task:
Write an SQL query to display the names of employees ordered by salary from highest to lowest.`,

    sql_solution: `SELECT name FROM employees ORDER BY salary DESC`,

    logic_question: `
Q1. Three boxes are labeled Apples, Oranges, Apples & Oranges.
All labels are wrong. Which box should you pick from?

A) Apples
B) Oranges
C) Apples & Oranges
D) Any box

Q2. Three switches control three bulbs in another room.
How can you determine which switch controls which bulb?

A) Turn all switches on
B) Turn one on, wait, turn it off, turn another on and check heat
C) Guess randomly
D) Turn all off

Write answers separated by comma.

Example:
A,B
`,

    logic_solution: ["C", "B"]
  },

  {
    id: 2,
    title: "Registration Form",

    html_question: `Create a registration form.

Requirements:

1. Label with text Username and an input field
2. Label with text Email and an input field
3. Label with text Password and an input field
4. A button with the text Register

Example label format: <label>Username</label>

Write the HTML form.`,

    html_solution: `<form><label>Username</label><input><label>Email</label><input type="email"><label>Password</label><input type="password"><button>Register</button></form>`,

    python_question: `Call a function named factorial to calculate factorial of 5.

Example format:
function_name(number)

Write the Python function call.`,

    python_solution: `factorial(5)`,

    sql_question: `Tables:

users(id,name)
orders(id,user_id)

Task:
Write an SQL query that joins the users table with the orders table using the user id.`,

    sql_solution: `SELECT * FROM users JOIN orders ON users.id = orders.user_id`,

    logic_question: `
Q1. After toggling lockers 100 times which lockers remain open?

A) Prime numbers
B) Even numbers
C) Perfect squares
D) Multiples of 10

Q2. Find the missing number:

2 6 7
4 8 12
6 ? 17

A) 9
B) 10
C) 11
D) 12

Answer format example:
A,B
`,

    logic_solution: ["C", "B"]
  },

  {
    id: 3,
    title: "Semantic Layout",

    html_question: `Create a webpage layout.

Requirements:

1. <header> containing text Debug Relay Race
2. <section> containing text Coding Challenges
3. <aside> containing text Hints
4. <footer> containing text © 2026 Debug Relay Race

Write the HTML structure.`,

    html_solution: `<div><header>Debug Relay Race</header><section>Coding Challenges</section><aside>Hints</aside><footer>© 2026 Debug Relay Race</footer></div>`,

    python_question: `Call the Python function reversed to reverse a list.

Example list:
[1,2,3]

Write the correct function call.`,

    python_solution: `reversed([1,2,3])`,

    sql_question: `Table: sales

id | customer_id | amount

Example data:
1 | 101 | 500
2 | 102 | 300
3 | 101 | 200

Task:
Write an SQL query that shows the total amount spent by each customer.`,

    sql_solution: `SELECT customer_id, SUM(amount) FROM sales GROUP BY customer_id`,

    logic_question: `
Q1. Four people must cross a bridge at night with one flashlight.
Times: 1,2,7,10 minutes.
Minimum total time?

A) 19
B) 18
C) 17
D) 16

Q2. You have 9 coins and one is heavier.
Minimum weighings to find it?

A) 1
B) 2
C) 3
D) 4

Answer format example:
A,B
`,

    logic_solution: ["C", "B"]
  },

  {
    id: 4,
    title: "HTML Table",

    html_question: `Create a table with the following data:

Name | Score

Alice | 90
Bob | 85
Charlie | 95

Write the full HTML table.`,

    html_solution: `<table><tr><th>Name</th><th>Score</th></tr><tr><td>Alice</td><td>90</td></tr><tr><td>Bob</td><td>85</td></tr><tr><td>Charlie</td><td>95</td></tr></table>`,

    python_question: `Call the Python function max to find the largest number in the list [3,7,2].`,

    python_solution: `max([3,7,2])`,

    sql_question: `Table: users

id | name | age

Task:
Write an SQL query to delete users whose age is less than 18.`,

    sql_solution: `DELETE FROM users WHERE age < 18`,

    logic_solution: ["C", "B"]
  },

  {
    id: 5,
    title: "Image Card",

    html_question: `Create a card component containing:

Image source:
card.jpg

Heading text:
Programming Challenge

Paragraph text:
Solve problems and level up.

Button text:
Start Now`,

    html_solution: `<div><img src="card.jpg"><h3>Programming Challenge</h3><p>Solve problems and level up.</p><button>Start Now</button></div>`,

    python_question: `Convert the string "25" into an integer using Python.`,

    python_solution: `int("25")`,

    sql_question: `Table: customers

id | name | city

Task:
Write an SQL query to display unique city names.`,

    sql_solution: `SELECT DISTINCT city FROM customers`,

    logic_solution: ["A", "C"]
  },

  {
    id: 6,
    title: "Video Section",

    html_question: `Create a section containing a video player.

Video source:
intro.mp4`,

    html_solution: `<section><video><source src="intro.mp4"></video></section>`,

    python_question: `Find the largest number in the list [10,5,8] using Python.`,

    python_solution: `max([10,5,8])`,

    sql_question: `Table: employees

id | name | salary

Task:
Write an SQL query to update salary to 50000 where id is 2.`,

    sql_solution: `UPDATE employees SET salary = 50000 WHERE id = 2`,

    logic_solution: ["B", "C"]
  },

  {
    id: 7,
    title: "Ordered List",

    html_question: `Create an ordered list containing:

HTML
CSS
JavaScript
Python
SQL`,

    html_solution: `<ol><li>HTML</li><li>CSS</li><li>JavaScript</li><li>Python</li><li>SQL</li></ol>`,

    python_question: `Reverse the list [5,4,3] using Python.`,

    python_solution: `reversed([5,4,3])`,

    sql_question: `Table: orders

id | product | quantity

Task:
Write an SQL query to count total orders.`,

    sql_solution: `SELECT COUNT(*) FROM orders`,

    logic_solution: ["B", "B"]
  },

  {
    id: 8,
    title: "Form Validation",

    html_question: `Create a form containing:

An input field requiring minimum 5 characters.
A submit button with text Submit.`,

    html_solution: `<form><input required minlength="5"><button>Submit</button></form>`,

    python_question: `Check whether number 10 is even using Python.`,

    python_solution: `10%2==0`,

    sql_question: `Table: customers

id | name | city

Task:
Write an SQL query to display names of customers whose names start with 'A'.`,

    sql_solution: `SELECT name FROM customers WHERE name LIKE 'A%'`,

    logic_solution: ["C", "C"]
  }

];
