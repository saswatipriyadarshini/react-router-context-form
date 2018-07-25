import validator from 'validator';

export const required = (value = '') => (!value.toString().trim().length);

export const fileSize = (value, maxSize) => ((((value.size) / 1024) / 1024) > maxSize);

export const maxLength = (value, length) => (value.length > length);

export const isInt = validator.isInt;

export const isNotNumber = value => (!validator.isInt(value));

export const isEmail = email => (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)));

export const isEmpty = value => (value.toString().trim() === '<p></p>');

export const isUrl = value => !(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(value))