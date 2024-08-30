export const getUserById = `select id, email, nickname, fullname, role_id as "roleId", agencyid as "agencyId" from users where id=$1`;
