const express = require('express');

const app = express();
const port = 5000;
const cors = require('cors')
app.use(cors())

app.get('/api/token', (req, res) => {
	const str = "brooke:123123123123:" + (Date.now() + 3600000).toString();
	res.send({ token: str, displayName: "Brooke" })
});

app.get('/api/post/:uuid', (req, res) => {
	res.send({
		uuid: "123456789",
		title: "Dummy title",
		body: `I love cheese, especially melted cheese emmental. Cream cheese danish fontina macaroni cheese smelly cheese parmesan babybel monterey jack cheesy feet. Cheese strings cheese and biscuits edam cheesy grin gouda cheese and biscuits squirty cheese croque monsieur. Babybel.

Say cheese halloumi macaroni cheese.Babybel st.agur blue cheese who moved my cheese cheese on toast who moved my cheese cheese on toast mascarpone cheesy grin.Cheesy grin parmesan mozzarella st.agur blue cheese halloumi ricotta taleggio fromage.Cheese and wine hard cheese the big cheese edam st.agur blue cheese port- salut say cheese taleggio.Cheese triangles.

Cauliflower cheese halloumi cheddar.When the cheese comes out everybody's happy jarlsberg mozzarella paneer fromage frais cream cheese ricotta fromage. Caerphilly cow cottage cheese the big cheese lancashire boursin bavarian bergkase gouda. Stinking bishop.`,
		excerpt: "Emmental squirty cheese gouda. Swiss smelly cheese cheesy grin boursin cheddar feta boursin jarlsberg. Cheese and wine stilton parmesan stilton feta red leicester rubber cheese goat. ",
		url: "http://localhost/post/mypost",
		postType: "post",
		cssUrl: "",
		jsUrl: "",
		thumbnailUrl: "",
		outdated: false,
		status: "draft",
		published_date: Date.now() - 1000000,
		updated_date: Date.now() - 10000,
		tags: [{ name: "tag_1", displayName: "Tag 1" }],
		categories: [{ name: "cat_1", displayName: "Category 1" }],
		seoKeywords: ["Tag 1", "Category 1"],
		language: "en"
	})
});

app.get('/api/post/:uuid/:lang', (req, res) => {
	res.send({
		uuid: "123456789",
		title: "Dummy title",
		body: `I love cheese, especially melted cheese emmental. Cream cheese danish fontina macaroni cheese smelly cheese parmesan babybel monterey jack cheesy feet. Cheese strings cheese and biscuits edam cheesy grin gouda cheese and biscuits squirty cheese croque monsieur. Babybel.

Say cheese halloumi macaroni cheese.Babybel st.agur blue cheese who moved my cheese cheese on toast who moved my cheese cheese on toast mascarpone cheesy grin.Cheesy grin parmesan mozzarella st.agur blue cheese halloumi ricotta taleggio fromage.Cheese and wine hard cheese the big cheese edam st.agur blue cheese port- salut say cheese taleggio.Cheese triangles.

Cauliflower cheese halloumi cheddar.When the cheese comes out everybody's happy jarlsberg mozzarella paneer fromage frais cream cheese ricotta fromage. Caerphilly cow cottage cheese the big cheese lancashire boursin bavarian bergkase gouda. Stinking bishop.`,
		excerpt: "Emmental squirty cheese gouda. Swiss smelly cheese cheesy grin boursin cheddar feta boursin jarlsberg. Cheese and wine stilton parmesan stilton feta red leicester rubber cheese goat. ",
		url: "http://localhost/post/mypost",
		postType: "post",
		cssUrl: "",
		jsUrl: "",
		thumbnailUrl: "",
		outdated: false,
		status: "draft",
		published_date: Date.now() - 1000000,
		updated_date: Date.now() - 10000,
		tags: [{ name: "tag_1", displayName: "Tag 1" }],
		categories: [{ name: "cat_1", displayName: "Category 1" }],
		seoKeywords: ["Tag 1", "Category 1"],
		language: "de"
	})
});

app.get('/api/settings', (req, res) => {
	res.send({
		languages: ["en", "de"],
		postTypes: ["post"]
	});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))