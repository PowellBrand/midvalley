update standarddraw
set "standard_draw" = $1
where id = 1
returning *;