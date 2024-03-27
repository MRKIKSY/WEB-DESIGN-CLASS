export const data = [
    {
      id: 1,
      title: "EXERCISE 1",
      category: "HTML",
      desc: `
        <!DOCTYPE html>
        <html>
        <head>
        <style>
        .note {
        font-size: 120%;
        color: red;
        }
        </style>
        </head>
        <body>
        
        <h1>My <span class="note">Important</span> Heading</h1>
        <p>This is some <span class="note">important</span> text.</p>
        
        </body>
        </html>
      `,
    },
    {
      id: 2,
      title: "EXERCISE 2",
      category: "HTML",
      desc: `
        <!DOCTYPE html>
        <html>
        <head>
        <style>
        .note {
        font-size: 120%;
        color: red;
        }
        </style>
        </head>
        <body>
        
        <h1>My <span class="note">Important</span> Heading</h1>
        <p>This is some <span class="note">important</span> text.</p>
        
        </body>
        </html>
      `,
    },
    {
      id: 3,
      title: "EXERCISE 3",
      category: "HTML",
      desc: `
        <!DOCTYPE html>
        <html>
        <head>
        <style>
        #myHeader {
        background-color: lightblue;
        color: black;
        padding: 40px;
        text-align: center;
        }
        </style>
        </head>
        <body>
        
        <h2>The id Attribute</h2>
        <p>Use CSS to style an element with the id "myHeader":</p>
        
        <h1 id="myHeader">My Header</h1>
        
        </body>
        </html>
      `,
    },
    {
      id: 4,
      title: "EXERCISE 4",
      category: "HTML",
      desc: `
        <!DOCTYPE html>
        <html>
        <head>
        <style>
        .note {
        font-size: 120%;
        color: red;
        }
        </style>
        </head>
        <body>
        
        <h1>My <span class="note">Important</span> Heading</h1>
        <p>This is some <span class="note">important</span> text.</p>
        
        </body>
        </html>
      `,
    },
    {
      id: 5,
      title: "EXERCISE 5",
      category: "HTML",
      desc: `
        <!DOCTYPE html>
        <html>
        <head>
        <style>
        /* Style the element with the id "myHeader" */
        #myHeader {
        background-color: lightblue;
        color: black;
        padding: 40px;
        text-align: center;
        }
        /* Style all elements with the class name "city" */
        .city {
        background-color: tomato;
        color: white;
        padding: 10px;
        }
        </style>
        </head>
        <body>
        <h2>Difference Between Class and ID</h2>
        <p>A class name can be used by multiple HTML elements, while an id name must only be used by one HTML element within the page:</p>
        <!-- An element with a unique id -->
        <h1 id="myHeader">My Cities</h1>
        <!-- Multiple elements with same class -->
        <h2 class="city">London</h2>
        <p>London is the capital of England.</p>
        <h2 class="city">Paris</h2>
        <p>Paris is the capital of France.</p>
        <h2 class="city">Tokyo</h2>
        <p>Tokyo is the capital of Japan.</p>
        </body>
        </html>
      `,
    },
    {
      id: 6,
      title: "EXERCISE 6",
      category: "HTML",
      desc: `
        <!DOCTYPE html>
        <html>
        <body>
        
        <h2>Using The id Attribute in JavaScript</h2>
        <p>JavaScript can access an element with a specified id by using the getElementById() method:</p>
        
        <h1 id="myHeader">Hello World!</h1>
        <button onclick="displayResult()">Change text</button>
        
        <script>
        function displayResult() {
        document.getElementById("myHeader").innerHTML = "Have a nice day!";
        }
        </script>
        
        </body>
        </html>
      `,
    },
    {
      id: 7,
      title: "EXERCISE 7",
      category: "HTML",
      desc: `
        <!DOCTYPE html>
        <html>
        <head>
        <title>A Meaningful Page Title</title>
        </head>
        <body>
        
        <p>The content of the body element is displayed in the browser window.</p>
        <p>The content of the title element is displayed in the browser tab, in favorites and in search-engine results.</p>
        
        </body>
        </html>
      `,
    },
    {
      id: 8,
      title: "EXERCISE 8",
      category: "HTML",
      desc: `
        <!DOCTYPE html>
        <html>
        <body>
        
        <h2>HTML Forms</h2>
        
        <form action="/action_page.php">
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" value="John"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="Doe"><br><br>
        <input type="submit" value="Submit">
        </form>
        
        <p
        `,
    },

    {
      id: 9,
      title: "EXERCISE 9- SNAKE GAME",
      category: "HTML CSS JAVASCRIPT",
      desc: `
  1. Create a NEW Folder on your Desktop and name the Folder Snake Folder
  
  Step 2 Open your Microsoft Visual Studio code and create 3 different separate
   new text files
  
  Step 3. Save the 3 text files INSIDE THE snake folder on the desktop.
   Save the first file as INDEX.HTML save the second file as styles.css
    and the last file as index.js
  
  These 3 files must be saved inside the SNAKE FOLDER
  
  STEP 4- in the index.html copy and paste the following source code inside:

  STEP 5 
  VISIT NAIRALAND FOR THE REMAINING SOURCE CODE 

   CLICK on the link below  or Copy and paste the following url into your browser 


  https://www.nairaland.com/7808622/learn-how-program-free/2#129137922
  

        `,
 },
      
      



    
]