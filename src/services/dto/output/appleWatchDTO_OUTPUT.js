export class IWatchOutputDTO {
    constructor({
        name,
        link,
        intro,
        disc,
        order,
        model,
        family,
        ident,
        storage,
        batteryLife
    }) {
        this.name = name;
        this.link = link;
        this.intro = intro;
        this.disc = disc;
        this.order = order;
        this.model = model;
        this.family = family;
        this.ident = ident;
        this.storage = storage;
        this.batteryLife = batteryLife;
    }
}