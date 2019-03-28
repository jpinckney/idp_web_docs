create table category
(
category_id serial primary key,
category varchar(20),
description varchar,
topic_note_id int 
)

insert into category 
(category)
values('react', 'javascript', 'html')