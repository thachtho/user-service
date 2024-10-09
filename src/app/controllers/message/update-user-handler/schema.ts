export const schema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    email: { type: 'string' },
    nickname: { type: 'string' },
    fullname: { type: 'string' },
    password: { type: 'string' },
  },
  required: ['id'],
  additionalProperties: false,
};
