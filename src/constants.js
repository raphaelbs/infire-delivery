export const INSTAGRAM_NAME = 'infiredelivery';
export const PHONE_NUMBER = '(37) 98832-9573';

export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_NAME}`;
export const WHATSAPP_URL = `https://wa.me/55${PHONE_NUMBER.replace(/[^\d]/g, '')}`;

export const PEDIR_TEXT = items =>
  encodeURI(`Olá!\n\nSegue meu pedido:\n${items.map(({ qtd, title }) => `${qtd}x ${title}`).join(',\n')}`);

export const displayPrice = value => `R$ ${(value.toFixed(2) + '').replace('.', ',')}`;

export const MAX_WIDTH = 960;
