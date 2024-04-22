// Main Variables

let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-repos .get-button");
let reposData = document.querySelector(".show-data");
let spanRepos = document.getElementById("result");



// getButton.onclick = getRepos();
getButton.onclick = () => {
    getRepos()
};


// Get Repos Function
function getRepos() {

    if (theInput.value == "") {

        spanRepos.textContent = "Please Write Github Username."

    }
    else {

        fetch(`https://api.github.com/users/${theInput.value}/repos`)
            .then((res) => res.json())

            .then((repos) => {

                // Empty The Container
                reposData.innerHTML = "";

                // Loop On Repos
                repos.forEach((repo) => {

                    // Create The Main Div Element
                    let mainDiv = document.createElement("div");

                    // Create Repo Name Text
                    let repoName = document.createTextNode(repo.name);

                    // Append The Text To Main Div
                    mainDiv.appendChild(repoName);

                    // Create Repo URl Anchor
                    let theUrl = document.createElement(`a`);

                    // Create Repo Url Text
                    let theUrlText = document.createTextNode(' Visit');

                    // Append The URL Text To Anchor Tag
                    theUrl.appendChild(theUrlText);

                    // Add the 'href' 
                    theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

                    // Set Attribute Blank
                    theUrl.setAttribute('target', '_blank');

                    // Append Url Anchor To The Main Div
                    mainDiv.appendChild(theUrl);

                    // Create Stars Count Span
                    let starsSpan = document.createElement('span');

                    // Create The Stars Count Text
                    let starsText = document.createTextNode(` Stars ${repo.stargazers_count}`);

                    // Add Stars Count Text To Stars Span 
                    starsSpan.appendChild(starsText);

                    // Add Class On Main Div
                    mainDiv.className = "repo-box";

                    // Append Stars Count Span To Main Div
                    mainDiv.appendChild(starsSpan);

                    // Append The Main Div To Container
                    reposData.appendChild(mainDiv);


                });

            });
    }

}
