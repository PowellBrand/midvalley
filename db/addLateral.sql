update sewer_lat
set "sewer_lateral" = $1
where id = 1
returning *;