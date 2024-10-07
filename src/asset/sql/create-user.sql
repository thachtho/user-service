insert into users (
        nickname,
        fullname,
        email,
        password,
        role_id,
        agency_id
    )
values($1, $2, $3, $4, $5, $6)
RETURNING *;