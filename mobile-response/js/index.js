window.onload = function(e)
{
	var menu = document.querySelector('.menu')
	menu.addEventListener('click',function(e)
	{
		for(var i=0;i<menu.children.length;i++)
		{
			menu.children[i].removeAttribute('class')
		}
	}) 
}