document.addEventListener('DOMContentLoaded', function() {
  const freelancers = [
      { name: "Dr. Slice", price: 25, occupation: "Gardener" },
      { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
      { name: "Prof. Possibility", price: 43, occupation: "Teacher" },
      { name: "Prof. Prism", price: 81, occupation: "Teacher" },
      { name: "Dr. Impulse", price: 43, occupation: "Teacher" },
      { name: "Prof. Spark", price: 76, occupation: "Programmer" },
      { name: "Dr. Wire", price: 47, occupation: "Teacher" },
      { name: "Prof. Goose", price: 72, occupation: "Driver" }
  ];

  const potentialNames = ["Prof. Lightning", "Dr. Quantum", "Prof. Mystery", "Ms. Marvel", "Mr. Fantastic", "Dr. Strange"];
  const occupations = ["Scientist", "Quantum Physicist", "Mystery Solver", "Superhero", "Inventor", "Magician"];
  const prices = [90, 110, 85, 95, 100, 88];

  function renderFreelancers() {
      const tableBody = document.querySelector('#freelancerTable');
      tableBody.innerHTML = ""; 
      freelancers.forEach(freelancer => {
          const row = document.createElement('tr');
          row.innerHTML = `<td>${freelancer.name}</td><td>${freelancer.occupation}</td><td>$${freelancer.price}</td>`;
          tableBody.appendChild(row);
      });
  }

  function calculateAveragePrice() {
      const average = freelancers.reduce((acc, cur) => acc + cur.price, 0) / freelancers.length;
      document.querySelector('#averagePrice').innerText = `Average Starting Price: $${average.toFixed(2)}`;
  }

  function addRandomFreelancer() {
      if (potentialNames.length === 0) {
          console.log("No more unique names available.");
          return; 
      }

      const randomNameIndex = Math.floor(Math.random() * potentialNames.length);
      const randomName = potentialNames.splice(randomNameIndex, 1)[0]; 
      const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
      const randomPrice = prices[Math.floor(Math.random() * prices.length)];
      const newFreelancer = { name: randomName, occupation: randomOccupation, price: randomPrice };

      freelancers.push(newFreelancer);
      renderFreelancers();
      calculateAveragePrice();
  }

  renderFreelancers();
  calculateAveragePrice();
  setInterval(addRandomFreelancer, 1000); 
});
