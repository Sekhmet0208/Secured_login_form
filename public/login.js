document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        return response.json().then(error => {
            throw new Error('Échec de la connexion : ' + (error.message || 'Utilisateur ou mot de passe incorrect'));
        });
    })
    .then(data => {
        alert('Connexion réussie !');
    })
    .catch((error) => {
        console.error('Erreur:', error);
        alert(error.message); 
    });
});
