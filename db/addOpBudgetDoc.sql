update budget_doc
set "budget_document" = $1
where id = 1
returning *;