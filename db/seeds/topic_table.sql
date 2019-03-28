create table topic
(
topic_id serial primary key,
topic varchar(20),
topic_description varchar(500),
syntax varchar(500),
category_id int
)


 /** 
* ! Javascript
*/

insert into topic
(topic, topic_description, syntax, category_id)
values('object', 'The Object constructor creates an object wrapper.', '// Object initialiser or literal
{ [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] }

// Called as a constructor
new Object([value])',2);

insert into topic
(topic, topic_description, syntax, category_id)
values('array', 'The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.', '[element0, element1, ..., elementN]
new Array(element0, element1[, ...[, elementN]])
new Array(arrayLength)',2);

insert into topic
(topic, topic_description, syntax,category_id)
values('string', 'The String global object is a constructor for strings or a sequence of characters.', '"use double quotes or single quotes to declare a string"',2)

 /** 
* ! React
*/

 /** 
* ! HTML
*/