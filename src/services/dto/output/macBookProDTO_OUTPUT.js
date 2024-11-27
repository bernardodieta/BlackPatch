class MacBookProOutputDTO {
    constructor({
      name,
      link,
      introductionDate,
      discontinuationDate,
      orderNumber,
      model,
      family,
      identifier,
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
      this.identifier = identifier; // "ID"
      this.ram = ram; // "RAM"
      this.vram = vram; // "VRAM"
      this.storage = storage; // "Storage"
      this.optical = optical; // "Optical"
    }
  }