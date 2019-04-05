update users_notes
set notes = $2
where user_notes_id = $1;

select * from users_notes

--  need ascending order