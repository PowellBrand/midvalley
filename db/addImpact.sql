update impact
set "impact_fee" = $1
where id = 1
returning *;