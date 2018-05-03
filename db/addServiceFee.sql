update service
set "service_fee" = $1
where id = 1
returning *;