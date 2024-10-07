UPDATE users
SET nickname = $2,
    fullname = $3,
    email = $4,
    password = $5,
    role_id = $6,
    agency_id = $7
WHERE id = $1
RETURNING *;