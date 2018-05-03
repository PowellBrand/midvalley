update budget_sum
set "budget_summary" = $1
where id = 1
returning *;