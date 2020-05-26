<style>
	.staging-mode {
		position: fixed;
		bottom: 0;
		width: 100%;
		color: #f2dede;
		border-top: 1px solid #E51717;
		background: #E51717;
		z-index: 50000;
		padding: 2em 0;
		text-align: center;
		font-weight: bold;
	}
	.staging-mode__close {
		background: transparent;
		padding: .5em 1em;
		border: 1px solid #f2dede;
		color: #f2dede;
	}
</style>

<div class="staging-mode">
	<div class="f-container">
		<h3>Versão staging</h3>
		<button class="staging-mode__close">fechar</button>
	</div>
</div>
<script>
	document.getElementsByClassName('staging-mode__close')[0].addEventListener('click', e => {
		var stagingMode = document.getElementsByClassName('staging-mode')[0];
		stagingMode.setAttribute('class', stagingMode.getAttribute('class') + ' is-hidden');
	});
</script>
