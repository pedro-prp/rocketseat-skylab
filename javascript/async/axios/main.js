axios.get('https://api.github.com/users/pedro-prp')
    .then(function(response) {
        console.log(response.data.repos_url);
    })
    .catch(function(err) {
        console.warn(err);
    });