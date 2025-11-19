

//code that communicates between server and client
const updateText = document.querySelectorAll('.update')
const deleteText = document.querySelectorAll('.trash')

Array.from(deleteText).forEach(element =>{
    element.addEventListener('click', deletePaint)
})
Array.from(updateText).forEach(element =>{
    element.addEventListener('click', updatePaint)
})

async function deletePaint(){
    const paintName = this.parentNode.childNodes[1].innerText

    try{
        const response = await fetch('deletePaint', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'plantName': paintName
            })
        })

        const data = await response.json()
        console.log(data)
        location.reload()
    }
    catch(err){
        console.log(err)
    }
}






/*async function updatePaint(){
    const paintName = this.parentNode.childNodes[1].innerText
	console.log(endangered)

    try{
        const response = await fetch('updatePaint', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'endangered': endangered
            })
        })

        const data = await response.json()
        console.log(data)
        location.reload()
    }
    catch(err){
        console.log(err)
    }
}*/