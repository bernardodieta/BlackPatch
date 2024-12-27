export class IPadAirOutputDTO {
    constructor({
      name,
      link,
      intro,
      disc,
      order,
      model,
      family,
      ident,
      network,
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
      this.network = network;
      this.batteryLife = batteryLife; 
    }
  }