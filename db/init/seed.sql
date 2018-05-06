create table agenda
(
    id serial primary key,
    agenda text
)

create table budget_doc
(
    id serial primary key,
    budget_documentation text
)

create table budget_sum
(
    id serial primary key,
    budget_summary text
)

create table meeting
(
    id serial primary key,
    meeting_schedule text
)

create table service
(
    id serial primary key,
    service_fee text
)

create table sewer
(
    id serial primary key,
    sewer_rate text
)

create table sewer_lat
(
    id serial primary key,
    sewer_lateral text
)

create table if not exists users (
    id serial primary key,
    username varchar(180),
    email varchar(180),
    auth_id text,
    admin boolean
);

