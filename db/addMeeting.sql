update meeting
set "meeting_schedule" = $1
where id = 1
returning *;