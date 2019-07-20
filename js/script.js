var users = [
    {
        nombre: 'Jose',
        genero: 'M',
        hobby: 'Mascotas',
        avatar: 'bootstrap-solid.svg',
    },
    {
        nombre: 'Betty',
        genero: 'F',
        hobby: 'UFC',
        avatar: 'bootstrap-solid.svg',
    },
    {
        nombre: 'Jorge',
        genero: 'M',
        hobby: 'Web',
        avatar: 'bootstrap-solid.svg',
    },
    {
        nombre: 'Esther',
        genero: 'F',
        hobby: 'Trabajar',
        avatar: 'bootstrap-solid.svg',
    },
    {
        nombre: 'Luis',
        genero: 'M',
        hobby: 'TV',
        avatar: 'bootstrap-solid.svg',
    },
    {
        nombre: 'Guillermo',
        genero: 'A',
        hobby: 'Futbol',
        avatar: 'bootstrap-solid.svg',
    },
    {
        nombre: 'Francis',
        genero: 'F',
        hobby: 'Networking',
        avatar: 'bootstrap-solid.svg',
    }
];


//Escucha y espera a que ocurra un evento

window.addEventListener('load', function(){
    
    function search (){
        //obtener hobby
        var hobbyfield = document.getElementById('hobby');
        var hobby = hobbyfield.value;
        
        //genero
        var genderfield = document.getElementById('genero');
        var selected = genderfield.selectedIndex;
        var genero = genderfield.options[selected].value;
        console.log(genero);   
        
        var resultsHTML = '';
        var numUsers = users.length;
        
        for (i = 0; i < numUsers; i++){
            
            if( genero == 'A' || genero == users[i].genero){
                if (hobby == '' || hobby == users[i].hobby){
                    resultsHTML += '<div class="persona-fila">\
                                    <img src="img/'+ users[i].avatar +'" height="40px" width="40px">\
                                    <div class="persona-info">\
                                    <div>' + users[i].nombre + '</div>\
                                    <div>' + users[i].hobby + '</div></div>\
                                    <button>Agregar como amigo</button>\
                                    </div>';
                }
            }
        }
        results.innerHTML = resultsHTML;
    };
    
    var results = document.getElementById('results');
    var searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', search);
});