export class MacBookProOutputDTO {
    constructor({
      name,
      link,
      intro,
      disc,
      order,
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
      this.intro = intro; 
      this.disc = disc; 
      this.order = order; 
      this.model = model;
      this.family = family;
      this.ident = ident; 
      this.ram = ram; 
      this.vram = vram; 
      this.storage = storage; 
      this.optical = optical;
    }
  }