create table category
(
category_id serial primary key,
category varchar(20),
topic_note_id int, 
topic varchar(30),
subtopic varchar(30),
description varchar(500),
syntax varchar(100),
syntax_explanation varchar(500),
example varchar(500)
)

insert into category 
(topic, subtopic, description, syntax, syntax_explanation, example)
values('react', 'react subtopic', 'react description', 'react syntax', 'react syntax explanaion', 'react example')