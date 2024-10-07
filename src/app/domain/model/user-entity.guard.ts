export const userEntitySchema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    email: { type: 'string' },
    nickname: { type: 'string' },
    fullname: { type: 'string' },
    password: { type: 'string' },
    roleId: { type: 'number' },
    agencyId: { type: 'number' },
  },
  required: ['nickname', 'fullname', 'password', 'roleId', 'agencyId'],
  additionalProperties: false,
};
