export const WHATSAPP_URL = "https://wa.me/5537988329573";
export const INSTAGRAM_URL = "https://www.instagram.com/infiredelivery";
export const PEDIR_TEXT = title =>
  encodeURI(`Olá!
Quero pedir um ${title}!`);

export const displayPrice = value => `R$ ${(value.toFixed(2) + "").replace(".", ",")}`;
