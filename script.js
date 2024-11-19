function getRandomPosition() {
    const x = Math.random() * 100;
    const y = Math.random() * 320;
    return { x, y };
  }
  
  function getRandomSize() {
    const size = Math.random() * 7 + 3; // Random size between 3 and 7
    return `${size}vw`;
  }
  
  function getRandomColor() {
    const color1 = [5, 2, 15]; // RGB values for #050215
    const color2 = [37, 18, 85]; // RGB values for #251255
  
    const randomColor = color1.map((channel, index) => {
      const range = color2[index] - channel;
      return Math.floor(Math.random() * (range + 1)) + channel;
    });
  
    return `rgb(${randomColor.join(',')})`;
  }
  
  function getRandomRotation() {
    return Math.random() * 360; // Random rotation between 0 and 360 degrees
  }
  
  function getRandomOpacity() {
    return Math.random() * 0.5 + 0.5; // Random opacity between 0.5 and 1
  }
  
  function getRandomDelay() {
    return Math.random() * 1000; // Random delay between 0 and 500 milliseconds
  }
  
  function createLightningSpot() {
    const { x, y } = getRandomPosition();
    const size = getRandomSize();
    const color = getRandomColor();
    const rotation = getRandomRotation();
    const opacity = getRandomOpacity();
  
    const spot = document.createElement('div');
    spot.classList.add('lightning-spot');
    spot.style.left = `${x}vw`;
    spot.style.top = `${y}vh`;
    spot.style.width = size;
    spot.style.height = size;
    spot.style.backgroundColor = color;
    spot.style.transform = `rotate(${rotation}deg)`;
    spot.style.opacity = opacity;
  
    document.body.appendChild(spot);
  
    setTimeout(() => {
      spot.remove();
    }, 1000);
  }
  
  function triggerLightning() {
    const numberOfSquares = Math.floor(Math.random() * 10) + 5; // Random number of squares between 3 and 7
  
    for (let i = 0; i < numberOfSquares; i++) {
      setTimeout(createLightningSpot, getRandomDelay());
    }
  }
  
  setInterval(() => {
    triggerLightning();
  }, 3000);

// SKILLS DYNAMIC CONTENT
function displaySkills(category) {
    const skillsContent = document.getElementById('skills-content');

    // Clear previous content
    skillsContent.innerHTML = '';

    // Sample data (replace with your actual data)
    const skillsData = {
        'frontend': { 'HTML': 80, 'CSS': 75, 'JavaScript': 90 },
        'backend': { 'Python': 99, 'Node.js': 70, 'Databases': 80 },
        'tools': { 'Git': 85, 'Docker': 70, 'VSCode': 90 },
        'soft-skills': { 'Problem-Solving': 95, 'Communication': 85, 'Teamwork': 70 }
    };

    // Create and append bars based on the selected category
    for (const skill in skillsData[category]) {
        const skillBar = document.createElement('div');
        skillBar.innerHTML = `${skill}: ${skillsData[category][skill]}%`;
        skillBar.style.width = `${skillsData[category][skill]}%`;
        skillBar.className = 'skill-bar';
        skillsContent.appendChild(skillBar);
    }
}
displaySkills('frontend')

// Get the button
var mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 300px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function() {
    // document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

var currentBox = 4;
var totalBoxes = 4;
function showNext() {
    currentBox = (currentBox % totalBoxes) + 1;
    updateVisibility();
}

function showPrevious() {
    currentBox = (currentBox - 2 + totalBoxes) % totalBoxes + 1;
    updateVisibility();
}

function updateVisibility() {
    for (var i = 1; i <= totalBoxes; i++) {
        var box = document.getElementById("box" + i);
        if (i === currentBox) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    }
}

function sendEmail(subject, body) {
  Email.send({
      Host: "smtp.gmail.com",
      Username: "teamworktegbareid@gmail.com",
      Password: "Password",
      To: 'Receiveremail@gmail.com',
      From: "teamworktegbareid@gmail.com",
      Subject: subject,
      Body: body
  }).then(function (message) {
          alert("Email sent successfully")
      });
}

function hireme(btn) {
  const name = document.getElementById('name')
  const last = document.getElementById('last')
  const email = document.getElementById('email')
  const Message = document.getElementById('message');
  const send = document.getElementById('send');
  let isvalid = false;

  document.documentElement.scrollTop = 9999; // For Chrome, Firefox, IE, and Opera
  name.focus()
  if (btn == 'hireme'){
  Message.innerText = 'I want to Hire You.'
  };

  if (Message.value.length <= 0){
   Message.style.animation = "blinke 1.4s 2 1s ease-out";
   isvalid = false;
 } else {isvalid = true;}
  
  if (name.value.length <= 0){
    name.style.animation = "blinke 1.4s 2 1s ease-out";
    isvalid = false;
  } else {isvalid = true;}

  if (email.value.length <= 0){
    email.style.animation = "blinke 1.4s 2 1s ease-out";
    isvalid = false;
  } else {isvalid = true;}



 console.log(isvalid);

  setTimeout(() => {
  document.getElementById('name').style.animation = "";
  document.querySelector("#email").style.animation = "";
  document.getElementById('message').style.animation = "";
}, 3750);

  if (isvalid)
  {sendEmail('Portfolio Message', Message.value)};
}

document.getElementById('email').addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    hireme('send')
  }
});

showNext()

function collapse(params) {
  const side_nav = document.getElementById('side-nav')
  if (side_nav.classList.contains("close")){ // Open Side Nav
    side_nav.classList.remove('close')
    side_nav.style.left = '0px'
    document.body.style.overflowY = 'hidden'
    document.documentElement.scrollTop = 0;
    }else{
      side_nav.classList.add('close'); // Close Side Nav
      side_nav.style.left = '-570px'
      document.body.style.overflowY = 'auto'
      };
}