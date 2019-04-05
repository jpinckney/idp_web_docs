delete from users_notes
where user_notes_id = $1;

select * from users_notes