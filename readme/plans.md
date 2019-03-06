SCHEMA

users table

id
username
note
maybe date
maybe time


look up props.children, render props, react quill / quill js 
(react quill) is a component version of quill js

single layout component that uses props.children to render anything from the database

styled components:
title
header
footer
sidebar
code containers
black tags for sub categories

<LayoutGrid>
	<Header />
	
	<Sidebar />

	<Content>
		{props.children}
	</Content>

	<Footer />
<LayoutGrid>


LANDING PAGE




alternative to react-quill crud

user can update account information such as change an email 
or maybe allow the user to have a profile image and they can update or delete the picture


endpoints will need to check for category and id for topic
app.get('/api/:category/:id)
app.get('/api/react/1)



category is hard coded with categories like react js html ect

topic_note_id = is the number associated with the topic

topic = arrays, objects ect

sub topic = the actual array method names, 'new' object keyword ect

