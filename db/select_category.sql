select *
from category
join topic
on topic.category_id = category.category_id
join subtopic
on subtopic.topic_id = topic.topic_id
where category.category = $1