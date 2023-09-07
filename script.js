// document.addEventListener('DOMContentLoaded', function() {
//     var form = document.querySelector('#blogForm');
//     var detailsContainer = document.querySelector('#detailsContainer');

//     // Function to fetch and display blog entries
//     function fetchBlogEntries() {
//         fetch('fetch.php')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 // Clear existing entries before appending new ones
//                 detailsContainer.innerHTML = '';
//                 renderBlogEntries(data);
//             })
//             .catch(error => {
//                 console.error('Fetch error:', error);
//             });
//     }

//     // Function to render blog entries from data
//     function renderBlogEntries(entries) {
//         entries.forEach(function(entry) {
//             var blogEntry = document.createElement('div');
//             blogEntry.classList.add('blog-entry');
//             blogEntry.innerHTML = `
//                 <h1>${entry.title}</h1>
//                 <p>${entry.content}</p>
//                 <img src="${entry.image_path}" alt="Blog Image">
//                 <p>Video URL: ${entry.video_url}</p>
//             `;
//             detailsContainer.appendChild(blogEntry);
//         });
//     }

//     // Fetch and display blog entries when the page loads
//     fetchBlogEntries();

//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent the form from submitting

//         var titleInput = document.querySelector('#title');
//         var contentInput = document.querySelector('#content');
//         var imageInput = document.querySelector('#image');
//         var videoInput = document.querySelector('#video');

//         // Get the selected image file
//         var imageFile = imageInput.files[0];

//         // Create a FormData object to send the form data
//         var formData = new FormData();
//         formData.append('title', titleInput.value);
//         formData.append('content', contentInput.value);
//         formData.append('image', imageFile);
//         formData.append('video', videoInput.value);

//         // Send a POST request to submit.php to store the data using fetch
//         fetch('submit.php', {
//             method: 'POST',
//             body: formData
//         })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 // Upon successful submission, fetch and display updated blog entries
//                 fetchBlogEntries();
//                 // Clear the form fields after submission
//                 form.reset();
//             })
//             .catch(error => {
//                 console.error('Fetch error:', error);
//             });
//     });
// });







document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('#blogForm');
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting

      // Retrieve the form values
      var title = document.querySelector('#title').value;
      var content = document.querySelector('#content').value;
      var imageInput = document.querySelector('#image');
      var video = document.querySelector('#video').value;

      // Get the selected image file
      var imageFile = imageInput.files[0];

      // Create a new div element for the blog entry
      var blogEntry = document.createElement('div');
      blogEntry.classList.add('blog-entry');

      // Create an image element to display the selected image
      var imageElement = document.createElement('img');
      imageElement.src = URL.createObjectURL(imageFile);
      imageElement.alt = 'Blog Image';

      // Populate the blog entry with the filled details and the image element
      blogEntry.innerHTML = `
          <h1>${title}</h1>
          <p><b>Video URL: </b><a href="${video}" target="_blank">${video}</a></p>
          <p>${content}</p>
      `;

      // Append the image element and blog entry to the details container
      blogEntry.appendChild(imageElement);
      var detailsContainer = document.querySelector('#detailsContainer');
      detailsContainer.appendChild(blogEntry);

      // Clear the form fields after submission
      form.reset();
  });
});

