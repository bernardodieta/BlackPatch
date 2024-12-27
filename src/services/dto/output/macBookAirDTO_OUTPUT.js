export class MacBookAirOutputDTO {
    constructor({
      name,
      link,
      introductionDate,
      discontinuationDate,
      orderNumber,
      model,
      family,
      ident,
      ram,
      vram,
      storage,
      optical
    }) {
      this.name = name;
      this.link = link;
      this.introductionDate = introductionDate; // "Intro."
      this.discontinuationDate = discontinuationDate; // "Disc."
      this.orderNumber = orderNumber; // "Order"
      this.model = model;
      this.family = family;
      this.ident = ident; // "ID"
      this.ram = ram; // "RAM"
      this.vram = vram; // "VRAM"
      this.storage = storage; // "Storage"
      this.optical = optical; // "Optical"
    }
  }