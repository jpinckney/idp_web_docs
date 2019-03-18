create table subtopic
(
subtopic_id serial primary key,
subtopic varchar(20),
description varchar(500),
syntax varchar(500),
syntax_explaination varchar(500),
example varchar(500),
topic_id integer
)




/** 
* ! Objects
*/

insert into subtopic
(subtopic, description, syntax, syntax_explaination, example, topic_id)
values('object.assign()', 'this is the description of object.assign()', 'here is some syntax', 'the explanation of syntax which ill probably delete this column', 'basic usage of object.assign()',1);

insert into subtopic
(subtopic, description, syntax, syntax_explaination, example,topic_id)
values('object.create()', 'what is object.create()?', 'Object.create(proto, [propertiesObject])', 'well maybe ill keep the syntax explaination', 'examples',1);

/** 
* ! Arrays
*/

insert into subtopic
(subtopic, description, syntax, syntax_explaination, example,topic_id)
values('array.map()', 'this is the description of array.map()', 'var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])', 'should i include syntax explaination in the syntax column?', 'basic usage of array.map()',2);

insert into subtopic
(subtopic, description, syntax, syntax_explaination, example,topic_id)
values('array.filter()', 'The filter() method creates a new array with all elements that pass the test implemented by the provided function.', 'var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])', 'explaination', 'example',2);

insert into subtopic
(subtopic, description, syntax, syntax_explaination, example, topic_id)
values('array.splice()', 'The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.', 'array.splice(start[, deleteCount[, item1[, item2[, ...]]]])','explain this syntax to me plox', 'examples of dis splice',2);

/** 
* ! Strings
*/

insert into subtopic
(subtopic, description, syntax, syntax_explaination, example,topic_id)
values('string.length','The length property of a String object indicates the length of a string, in UTF-16 code units.', 'string.length', 'i cant really explain much here', 'just use it like this',3);

insert into subtopic
(subtopic, description, syntax, syntax_explaination, example,topic_id)
values('string.toUpperCase', 'The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isnt one).', 'str.toUpperCase()', 'explain this', 'example this to me',3);

insert into subtopic
(subtopic, description, syntax, syntax_explaination, example,topic_id)
values('string.toLowerCase', 'The toLowerCase() method returns the calling string value converted to lower case.', 'str.toLowerCase()', 'explain this', 'example this to me' ,3)