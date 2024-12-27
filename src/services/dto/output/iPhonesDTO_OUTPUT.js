export class IPhoneOutputDTO {
  constructor({
    name,
    link,
    intro,
    disc,
    order,
    model,
    family,
    ident,
    voice_use,
    music_use
  }) {

    this.name = name;
    this.link = link;
    this.intro = intro;
    this.disc = disc;
    this.order = order;
    this.model = model;
    this.family = family;
    this.ident = ident;
    this.voice_use = voice_use;
    this.music_use = music_use;
  }
}