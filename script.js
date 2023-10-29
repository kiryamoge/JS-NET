
    const userLi = document.getElementById('userList');
    const userData = document.getElementById('userInfo');

    const showUserData = (user) => {
        userData.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <p class="card-text"><strong> Username: </strong> ${user.username}</p>
            <p class="card-text"><strong> Address: </strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            <p class="card-text"><strong> Company: </strong> ${user.company.name}</p>
            <p class="card-text"><strong> Email: </strong> <a href="${user.email}">${user.email}</a></p>
          </div>
        `;
      };

      const showUserLi = (users) => {
        users.forEach((user) => {
          const listItem = document.createElement('button');
          listItem.classList.add('list-group-item', 'list-group-item-action');
          listItem.textContent = user.name;
          listItem.addEventListener('click', () => showUserData(user));
          userLi.appendChild(listItem);
        });
      };

      const serverUsers = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          if(!response.ok){
            throw new Error('Ошибка статус-кода')
        }
          const users = await response.json();
          showUserLi(users);
          showUserData(users[0]);
        } catch (error) {
          console.log(error.message);
        }
      };
      serverUsers();