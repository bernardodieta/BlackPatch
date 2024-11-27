class WatchOutputDTO {
    constructor({
        name,
        link,
        introductionDate,
        discontinuationDate,
        orderNumber,
        model,
        family,
        identifier,
        storage,
        batteryLife
    }) {
        this.name = name;
        this.link = link;
        this.introductionDate = introductionDate;
        this.discontinuationDate = discontinuationDate;
        this.orderNumber = orderNumber;
        this.model = model;
        this.family = family;
        this.identifier = identifier;
        this.storage = storage;
        this.batteryLife = batteryLife;
    }
}