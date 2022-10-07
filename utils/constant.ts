export const MONGODB_URI = [
  'mongodb://',
  process.env.NODE_ENV === 'production' ? 'mongo' : 'localhost',
  ':27017',
].join('');
