export default class ItemListResponseDTO{
    constructor(item){
        this.itemName = item.name;
        this.itemModel = item.model;
        this.itemYear = item.year;
        this.itemRam = item.ram;
        this.itemRamSlot = item.ramSlot
        this.itemProcesador = item.procesador;
        this.itemstorageCant = item.storageCant;
        this.itemVideoCard = item.videoCart;
        
    }
}