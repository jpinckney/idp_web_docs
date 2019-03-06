create table category
(
id serial primary key,
category_id int,
topic_note_id int, 
topic varchar(30),
description varchar(500),
syntax varchar(100),
syntax_explaination varchar(500)
)