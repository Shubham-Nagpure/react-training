// Replace all p tags with the phrase “How’s the Josh?” using Javascript
const updatePageButton = document.querySelector("#page-update-button");
updatePageButton.addEventListener("click", () => {
  // Line 7-9 will replace the all p tags with phrase "How's the josh"
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((p) => {
    p.textContent = "How's the Josh?";
  });
});

// Add a button to change the video playback speed to 10x on YouTube
const playbackRateButton = document.createElement("button");
playbackRateButton.setAttribute("class", "ytp-play-button ytp-button");
playbackRateButton.style.backgroundColor = "#4e74ff";
playbackRateButton.style.color = "white";
playbackRateButton.style.border = "none";
playbackRateButton.style.borderRadius = "5px";
playbackRateButton.style.textAlign = "center";
playbackRateButton.style.textDecoration = "none";
playbackRateButton.style.fontSize = "16px";
playbackRateButton.style.fontFamily = "Roboto, sans-serif";
playbackRateButton.textContent = "10x";

// Add event listener to the button
playbackRateButton.addEventListener("click", () => {
  const video = document.querySelector("video");
  video.playbackRate = 10;
});

// Add the button to the video actions container
const videoActions = document.querySelector(".ytp-right-controls");
videoActions.appendChild(playbackRateButton);

// const playbackRate = document.querySelector("#playback-rate");
// const changePlaybackRate = playbackRate.addEventListener("click", (event) => {
//   event.preventDefault();
//   const rate = event.target.value();
//   const video = document.querySelector("video");
//   video.playbackRate = 10;
// });

// Submit a blog to a mock API (reqres.in)
const formSelector = document.querySelector("#blog-form");
const submitHandle = formSelector.addEventListener("submit", (event) => {
  debugger;
  event.preventDefault();

  const title = document.getElementById("title");
  const details = document.getElementById("details");
  const auther = document.getElementById("auther");
  saveBlog({ title, details, auther });
});

const saveBlog = (params) => {
  const url = "https://reqres.in/api/blogs";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      alert("Your blog post successfully!");
      console.log(data);
    })
    .catch((error) => {
      alert("Failed to post blog" + error);
      console.error(error);
    });
};

// Create a blog list page that fetches a list of users from a mock API and adds them to a table on the page
// after loading. Add a button to sort the users by name. Add an input to filter the table by search.
//  (Optional: Show “Loading…” or a loading spinner on the screen till the data loads)
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const tableBody = document.querySelector(".table-body");
const table = document.querySelector(".table");
const searchInput = document.querySelector("#search-input");
const sortButton = document.querySelector("#sort-button");
const loading = document.querySelector("#loading");

function isLoading(flag) {
  const spinner = document.querySelector(".loader");
  spinner.style.display = flag === true ? "inline-block" : "none";
}

const filterUsers = (event) => {
  const search = document.querySelector("#search").value;
  const params = {};
  params.username_like = search ? search : "";

  loadTableData(params);
};

const sortUsersAsc = () => {
  const params = {};
  params._order = "asc";
  params._sort = "name";

  loadTableData(params);
};

const sortUsersDesc = () => {
  const params = {};
  params._order = "desc";
  params._sort = "name";

  loadTableData(params);
};

const loadTableData = async (params) => {
  const queryParams = [];
  let url = "https://jsonplaceholder.typicode.com/users";
  if (params) {
    Object.keys(params).forEach((key) => {
      if (params[key]) queryParams.push(`${key}=${params[key]}`);
    });

    url += "?" + queryParams.join("&");
  }

  console.log(url);
  isLoading(true);
  document.querySelector(".no-data").style.display = "none";
  document.querySelector(".load-data").style.display = "none";
  document.querySelector(".table").style.display = "none";
  fetch(url)
    .then((response) => response.json())
    .then((users) => {
      isLoading(false);

      document.querySelector(".table").style.display = "table";
      document.querySelector(".fliter-control").style.display = "contents";
      table.style.display = "table";
      loadUsers(users);
    })
    .catch((error) => console.error(error));
};

function loadUsers(users) {
  tableBody.innerHTML = "";
  for (const user of users) {
    console.log(user);
    const row = document.createElement("tr");
    row.classList.add("table-row");

    row.innerHTML = `
      <td class="table-data">${user.id}</td>
      <td class="table-data">${user.name}</td>
      <td class="table-data">${user.username}</td>
      <td class="table-data">${user.email}</td>
      <td class="table-data">${user.phone}</td>
    `;
    tableBody.appendChild(row);
  }
}
