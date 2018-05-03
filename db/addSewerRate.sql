update sewer
set "sewer_rate" = $1
where id = 1
returning *;