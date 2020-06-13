
<svelte:head>
	<title>100 legs</title>
</svelte:head>



<div class="_section-page _margin-center">
	<h3>How many legzz</h3>
	<div class="Selector _grid-5">
		{#each nums as num}
			<button class="_button __outline" on:click={()=>getRand(num)}>{num}</button>
		{/each}
	</div>
</div>

{#if num > 0}
	<div class={`Output _flex-${exercises.length} _padding _center _margin-2`}>
		{#each exercises as ex}
			<img src={`images/day${ex}.png`} alt={`day${ex}`} style={`width:${100/exercises.length}%`} />
		{/each}
	</div>
{/if}



<div class="_section-page _margin-center _divider-top">
	<p>Credit goes to <a href="https://my.actionjacquelyn.com/100-barre-sculpted-leg-challenge">Action Jacquelyn</a>. Thanks!</p>
</div>


<script>
	let nums = [1,2,3,4,5]
	let num = 0
	let exercises = []

	const randGen = () => {
		return Math.floor(Math.random() * 30) + 1
	}

	const getRand = (_num) => {
		num = _num
		exercises = []

		let i
		for (i=0; i<num; i++) {
			let randNum = -1
			while(!exercises.includes(randNum)) {
				randNum = randGen()
				if(!exercises.includes(randNum) && randNum > 0) {
					exercises.push(randNum)
				} else {
					randNum = -1
				}
			}
		}
	}
	
</script>




<style type="text/scss">
	img {
		max-width: 300px;
	}

</style>






