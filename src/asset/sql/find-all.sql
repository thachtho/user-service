select id,
    email,
    nickname,
    fullname,
    role_id as "roleId",
    agency_id as "agencyId",
    password
from users
where role_id = $1
    and agency_id = $2