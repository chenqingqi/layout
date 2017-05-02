/**************************************************
 *
 * @author chenqingqi
 * 
 * REM自适应布局
 * 
***************************************************/

window.rem = new function()
{
	
	/**
	 * 缩放值
	 */
	var scale_value;
	
	if(window.screen.width > window.screen.height)
	{
	    scale_value = window.screen.height;
	}
	else
	{
	    scale_value = window.screen.width;
	}
	
	
	/**
	 * 适配屏幕
	 * @width 基准宽度
	 * @size  基准字体大小
	 */
	function adapter(width,size)
	{
		var html = document.getElementsByTagName('html')[0];
		html.style.fontSize = scale_value/width*size+'px';
	}
	
	return{
		
		adapter:adapter
	}
}
