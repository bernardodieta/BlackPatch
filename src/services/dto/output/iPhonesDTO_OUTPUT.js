class IPhoneOutputDTO {
    constructor({
      name,
      link,
      introductionDate,
      discontinuationDate,
      orderNumber,
      model,
      family,
      identifier,
      voiceUse,
      musicUse
    }) {
      this.name = name;
      this.link = link;
      this.introductionDate = introductionDate; // "Intro."
      this.discontinuationDate = discontinuationDate; // "Disc."
      this.orderNumber = orderNumber; // "Order"
      this.model = model;
      this.family = family;
      this.identifier = identifier; // "ID"
      this.voiceUse = voiceUse; // "Voice Use:"
      this.musicUse = musicUse; // "Music Use:"
    }
  }
  