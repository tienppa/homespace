var users = [
  {
    id: 1,
    name: "Tien 1",
  },
  {
    id: 2,
    name: "Tien 2",
  },
  {
    id: 3,
    name: "Tien 3",
  },
  {
    id: 4,
    name: "Tien 4",
  },
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "Hello 1",
  },
  {
    id: 2,
    user_id: 2,
    content: "Hello 2",
  },
  {
    id: 3,
    user_id: 3,
    content: "Hello 3",
  },
  {
    id: 4,
    user_id: 4,
    content: "Hello 4",
  },
];

function getComments() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}

function getUsersByIds(userIds) {
  return new Promise(function (resolve, reject) {
    var result = users.filter(function (user) {
      return userIds.includes(user.id);
    });
    resolve(result);
  }, 2000);
}

getComments()
  .then(function (comments) {
    var userIds = comments.map(function (item) {
      return item.user_id;
    });
    return getUsersByIds(userIds).then(function (users) {
      return {
        users: users,
        comments: comments,
      };
    });
  })
  .then(function (data) {
    var html = "";
    var ulElement = document.querySelector("ul");
    data.comments.forEach(function (comment) {
      var user = data.users.find(function (user) {
        return user.id === comment.user_id;
      });
      html += `<li>${user.name} : ${comment.content}</li>`;
    });
    ulElement.innerHTML = html;
  })
  .catch(function (error) {
    console.log(error);
  });
