var HeaderMenu = React.createClass({

	getInitialState: function(){
		return{
			headerMenuItems: this.props.headerMenuItems,
		}
	},

	render: function(){
		var headerMenuItemsArray = this.props.headerMenuItems.map(function(item){
			return <HeaderMenuCard name={item.name} photoUrl={item.photo_url} key={item.id}/>
		})
		return(
			<div className="header-menu-wrapper">
				{headerMenuItemsArray}
			</div>
		)
	}
})