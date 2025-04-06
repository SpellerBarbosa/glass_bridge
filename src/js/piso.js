class Piso {
    constructor(id, isFragil, containerId, onPassar){
        this.id = id;
        this.isFragil = isFragil;
        this.containerId = containerId;
        this.onPassar = onPassar;
        this.elemento = this.createElement();
    }

    createElement(){
        const piso = document.createElement('div');
        piso.classList.add('vidro');
        piso.textContent = this.id;

        piso.addEventListener('click', ()=>{
            if(this.isFragil){
                piso.style.backgroundColor = "red"
                this.containerId.style.pointerEvents = "none";
                alert("Piso fragil, quebrou e voce caiu!")
            }else{
                piso.style.backgroundColor = "green";
                piso.style.pointerEvents = "none";
                this.onPassar();
            }
        })

        return this.containerId.appendChild(piso);
        
    }
}

export default Piso;