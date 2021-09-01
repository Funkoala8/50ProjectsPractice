var vm = new Vue({
	el: ".container",
	data: {
		cardsList: [
			{
				title: "Explore The World",
				bgc: {
					backgroundImage:
						"url(" + "./img/photo-1558979158-65a1eaa08691.jpg" + ")",
				},
				isclicked: true,
			},
			{
				title: "Wild Forest",
				bgc: {
					backgroundImage:
						"url(" + "./img/photo-1572276596237-5db2c3e16c5d.jpg" + ")",
				},
				isclicked: false,
			},
			{
				title: "Sunny Beach",
				bgc: {
					backgroundImage:
						"url(" +
						"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80" +
						")",
				},
				isclicked: false,
			},
			{
				title: "City on Winter",
				bgc: {
					backgroundImage:
						"url(" + "./img/photo-1551009175-8a68da93d5f9.jpg" + ")",
				},
				isclicked: false,
			},
			{
				title: "Mountains - Clouds",
				bgc: {
					backgroundImage:
						"url(" + "./img/photo-1549880338-65ddcdfd017b.jpg" + ")",
				},
				isclicked: false,
			},
		],
	},
	methods: {
		click(i) {
			this.cardsList.forEach((item) => {
				item.isclicked = false;
			});
			this.cardsList[i].isclicked = true;
		},
	},
});

  // var cardItem = document.querySelectorAll(".card");
      // cardItem.forEach((card) => {
      //   card.addEventListener("click", () => {
      //     removeClass();
      //     card.classList.add("active");
      //   });
      // });
      // function removeClass() {
      //   cardItem.forEach((card) => {
      //     card.classList.remove("active");
      //   });
      // }