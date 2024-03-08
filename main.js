class vendedor {
    constructor(c, v, cl) {
        this.codigo = c
        this.ventas = v
        this.cliente = cl
    }
    rendimiento() {
        return (this.ventas / this.cliente) * 10
    }
}
class novato extends vendedor {
    constructor(c, v, cl, s) {
        super(c, v, cl)
        this.sueldo = s
    }
    bono() {
        return this.rendimiento() * 10
    }
    pagoMensual() {
        return this.bono() + this.sueldo
    }
}
class experto extends vendedor {
    constructor(c, v, cl, a) {
        super(c, v, cl)
        this.anualidad = a
    }

    bonificacion() {
        return (this.rendimiento() * 2) * 100
    }
    mensual() {
        return this.anualidad / 12
    }
    pagoMensual() {
        return this.mensual() + this.bonificacion()
    }

}
class Compania{
    constructor(apm,ce){
        this.acumPagoMensual = apm
        this.contExperto = ce

    }
    procesar(v){
        if (v instanceof experto){
            this.acumPagoMensual += v.pagoMensual()
            this.contExperto ++
        }
    }

    promedio(){
        return this.acumPagoMensual / this.contExperto
    }
}
function main() {

    let salida = document.getElementById("salida")
    let vendedor1 = new novato(11, 20, 100, 50)
    let vendedor2 = new novato(33, 40, 80, 100)
    let vendedor3 = new novato(55,15,60,150)
    let vendedor4 = new novato(66,10,50,50)

    let vendedor5 = new experto(22, 30, 40, 3000)
    let vendedor6 = new experto(77, 10, 25, 6000)
    let vendedor7 = new experto(99,60,120,12000)
    let vendedor8 = new experto(44,8,32,2400)
    
    let compania = new Compania(0,0)

    compania.procesar(vendedor1)
    compania.procesar(vendedor2)
    compania.procesar(vendedor3)
    compania.procesar(vendedor4)
    compania.procesar(vendedor5)
    compania.procesar(vendedor6)
    compania.procesar(vendedor7)
    compania.procesar(vendedor8)


    salida.innerHTML = "vendedores <br>";


    salida.innerHTML += `1) Codigo: ${vendedor1.codigo} <br> Ventas: ${vendedor1.ventas} <br> Cliente: ${vendedor1.cliente} <br> Rendimiento: ${vendedor1.rendimiento()} <br> Bono: ${vendedor1.bono()} <br> Pago mensual:  ${vendedor1.pagoMensual()}<br>`
    salida.innerHTML += `2) Codigo: ${vendedor2.codigo} <br> Ventas: ${vendedor2.ventas} <br> Cliente: ${vendedor2.cliente} <br> Rendimiento: ${vendedor2.rendimiento()} <br> Bono: ${vendedor2.bono()} <br> Pago mensual:  ${vendedor2.pagoMensual()}<br>`
    salida.innerHTML += `3) Codigo: ${vendedor3.codigo} <br> Ventas: ${vendedor3.ventas} <br> Cliente: ${vendedor3.cliente} <br> Rendimiento: ${vendedor3.rendimiento()} <br> Bono: ${vendedor3.bono()} <br> Pago mensual: ${vendedor3.pagoMensual()}<br>`
    salida.innerHTML += `4) Codigo: ${vendedor4.codigo} <br> Ventas: ${vendedor4.ventas} <br> Cliente: ${vendedor4.cliente} <br> Rendimiento: ${vendedor4.rendimiento()} <br> Bono: ${vendedor4.bono()} <br> Pago mensual: ${vendedor4.pagoMensual()}<br>`
    salida.innerHTML += `5) Codigo: ${vendedor5.codigo} <br> Ventas: ${vendedor5.ventas} <br> Cliente: ${vendedor5.cliente} <br> Bonificacion: ${vendedor5.bonificacion()} <br> Mensual: ${vendedor5.mensual()} <br> Pago mensual: ${vendedor5.pagoMensual()}<br>`
    salida.innerHTML += `6) Codigo: ${vendedor6.codigo} <br> Ventas: ${vendedor6.ventas} <br> Cliente: ${vendedor6.cliente} <br> Bonificacion: ${vendedor6.bonificacion()} <br> Mensual: ${vendedor6.mensual()} <br> Pago mensual: ${vendedor6.pagoMensual()}<br>`
    salida.innerHTML += `7) Codigo: ${vendedor7.codigo} <br> Ventas: ${vendedor7.ventas} <br> Cliente: ${vendedor7.cliente} <br> Bonificacion: ${vendedor7.bonificacion()} <br> Mensual: ${vendedor7.mensual()} <br> Pago mensual: ${vendedor7.pagoMensual()}<br>`
    salida.innerHTML += `8) Codigo: ${vendedor8.codigo} <br> Ventas: ${vendedor8.ventas} <br> Cliente: ${vendedor8.cliente} <br> Bonificacion: ${vendedor8.bonificacion()} <br> Mensual: ${vendedor8.mensual()} <br> Pago mensual: ${vendedor8.pagoMensual()}<br>`
    salida.innerHTML += `Promedio: ${compania.promedio()}`

}



main()