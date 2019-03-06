create table users_notes
(
id serial primary key,
user_notes_id int,
user_id int,
notes varchar(500)
)