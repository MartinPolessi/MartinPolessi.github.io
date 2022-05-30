const btnresumen= document.getElementById('btnresumen');
const btnborrar = document.getElementById('btnborrar');
const cantidad = document.getElementById('cantidad');
const precio = document.getElementById('total');


let descuentos = document.getElementById('descuento');
var ticket = 200;

btnresumen.addEventListener('click', () => {
    if(cantidad.value){
        price()
        function price() {
            let descuento = Number;
            if(descuentos.value == 1) {
                descuento = 0.20;
            }
            if(descuentos.value == 2) {
                descuento = 0.50;
            }
            if(descuentos.value ==3 ) {
                descuento = 0.85;
            }
            if(descuentos.value == 4) {
                descuento = 1;
            }
            
            let price = (ticket * cantidad.value);
            let descuentoprecio = (price * descuento)
            precio.textContent = `Total a Pagar: $ ${descuentoprecio}`;
        }
        
    
    }
    else(alert('Ingrese la cantidad '));
})

btnborrar.addEventListener('click', () =>{
    clear();

    function clear() {
        precio.textContent = "Total a pagar: $";     
    }
})


