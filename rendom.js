// const spinner = document.getElementById('spinner').style.display='none';

const getData = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayData(data.results))
}

const displayData = (users) => {
    const card = document.getElementById('card');
    document.getElementById('spinner').style.display = 'none';
    for (const user of users) {
        // console.log(user);
        const div = document.createElement('div');
        div.classList.add('row', 'my-2', 'border');
        div.innerHTML = `
        <div class="col-md-4">
        <img src="${user.picture.large}" class="img-fluid rounded-start mt-4" alt="...">
    </div>
    <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${user.name.first} ${user.name.last }</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
        `;

        card.appendChild(div);
    }
}

getData();