class IPadAirOutputDTO {
    constructor({
      name,
      link,
      introductionDate,
      discontinuationDate,
      orderNumber,
      model,
      family,
      identifier,
      network,
      batteryLife
    }) {
      this.name = name;
      this.link = link;
      this.introductionDate = introductionDate; // "Intro."
      this.discontinuationDate = discontinuationDate; // "Disc."
      this.orderNumber = orderNumber; // "Order"
      this.model = model;
      this.family = family;
      this.identifier = identifier; // "ID"
      this.network = network; // "Network:"
      this.batteryLife = batteryLife; // "Battery Life:"
    }
  }