export const getUserById = `select id, email, nickname, fullname, role_id as "roleId", agency_id as "agencyId", password from users where id=$1`;
