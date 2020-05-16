export const WHATSAPP_URL = 'https://wa.me/5537988329573';
export const INSTAGRAM_URL = 'https://www.instagram.com/infiredelivery';
export const PEDIR_TEXT = items =>
  encodeURI(`Olá!\n\nSegue meu pedido:\n${items.map(({ qtd, title }) => `${qtd}x ${title}`).join(',\n')}`);

export const displayPrice = value => `R$ ${(value.toFixed(2) + '').replace('.', ',')}`;

export const MAX_WIDTH = 960;
