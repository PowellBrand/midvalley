update agenda
set "agenda" = $1
where id = 1
returning *;