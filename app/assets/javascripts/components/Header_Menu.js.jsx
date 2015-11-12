var HeaderMenu = React.createClass({

	getInitialState: function(){
		return{
			headerMenuItems: this.props.headerMenuItems,
		}
	},

	render: function(){
		var that=this
		var headerMenuItemsArray = this.props.headerMenuItems.map(function(item){
			return <HeaderMenuCard name={item.name} photoUrl={item.photo_url} key={item.id} id={item.id} fetchCategoryItems={that.props.fetchCategoryItems} />
		})
		return(
			<div className="header-menu-wrapper">
				{headerMenuItemsArray}
			</div>
		)
	}
})