var TestModal = React.createClass({
	render: function(){
		var closeModal = this.props.closeModal

		return(
			<div style={{position: 'absolute', width: '100%', top: 0, height: 500}}>
				test modal
				<button onClick={closeModal}> Close the Modal </button>
			</div>
		)
	}
})