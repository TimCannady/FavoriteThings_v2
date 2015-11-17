var TestModal = React.createClass({
	render: function(){
		var css = 'modal-wrapper'
		
		var closeModal = this.props.closeModal

		return(
			<div className={css}>
				test modal
				<button onClick={closeModal}> Close the Modal </button>
			</div>
		)
	}
})