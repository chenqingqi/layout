/**
 * 首页
 */
window.onload = function(e)
{
	document.querySelector('.menu').addEventListener('click',function(e)
	{
		var parent = e.target.parentNode;
		
		for(var i=0;i<parent.children.length;i++)
		{
			parent.children[i].removeAttribute('class')
		}
		e.target.setAttribute('class','active')
	})
}
