var suc = [];
var ubi = [];
var nom = [];
var ids = [];
var times = [];

function nombredelasucursa() {
    let nam = document.getElementById('nam');
    let u = document.getElementById('u');
    let s1 = new Sucursaal(nam.value);

    suc.push(s1);

    sessionStorage.setItem(suc, JSON.stringify(suc));

    sessionStorage.setItem(ubi, JSON.stringify(ubi));
    console.log(suc, ubi);

    alert("se saguardo sucursal");
    document.getElementById('nam  , u').value = ' '

}

function ingresaempleado() {
    let n = document.getElementById('n');
    let i = document.getElementById('i');
    let time = document.getElementById('time');
    let e1 = new Empleadoo(n, i.value);
    suc.push(e1);
    sessionStorage.setItem(nom, JSON.stringify(nom));
    sessionStorage.setItem(ids, JSON.stringify(ids));

    console.log(n);
    console.log(i);
    console.log(time);
    alert("se aguardo el empleado");
    document.getElementById('n,i,time'), value = ''
}