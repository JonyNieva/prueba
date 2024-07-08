document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const pedido = document.getElementById('pedido').value;

    const orderResult = document.getElementById('orderResult');
    orderResult.innerHTML = `<p>Gracias ${nombre}. Tu pedido ha sido recibido y será enviado a ${direccion}.</p><p>Detalle del pedido: ${pedido}</p>`;
});
