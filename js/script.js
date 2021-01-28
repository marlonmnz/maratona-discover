const Modal = {
    open(){
        // Abrir modal
        // Adicionar a classe active ao modal
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close(){
        // Fechar modal para
        // Remover a classe active do modal
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}